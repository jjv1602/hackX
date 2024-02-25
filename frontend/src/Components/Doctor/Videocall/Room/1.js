import AgoraRTC, { IAgoraRTCRemoteUser, IRemoteVideoTrack, IRemoteAudioTrack, ICameraVideoTrack, ILocalAudioTrack } from "agora-rtc-sdk-ng"
import './App.css'
import { useEffect, useRef, useState } from "react";
import { agoraAppId, agoraChannel, agoraToken } from "./constants";

const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

const options = {
    appId: agoraAppId,
    channel: agoraChannel,
    token: agoraToken,
    uid: Math.round(Math.random() * 100),
}

console.log({ options })

type ChannelParameters = {
    localAudioTrack: undefined | ILocalAudioTrack,
    localVideoTrack: undefined | ICameraVideoTrack,
    remoteAudioTrack: undefined | IRemoteAudioTrack,
    remoteVideoTrack: undefined | IRemoteVideoTrack,
    remoteUid: undefined | string,

}


const channelParameters: ChannelParameters = {
    // A variable to hold a local audio track.
    localAudioTrack: undefined,
    // A variable to hold a local video track.
    localVideoTrack: undefined,
    // A variable to hold a remote audio track.
    remoteAudioTrack: undefined,
    // A variable to hold a remote video track.
    remoteVideoTrack: undefined,
    // A variable to hold the remote user id.s
    remoteUid: undefined,
};

console.log(agoraToken)

function App() {
    const localVideoRef = useRef<HTMLDivElement>(null);
    const remoteVideoRef = useRef<HTMLDivElement>(null);

    const [transcript, setTranscript] = useState<string>("");


    const handleJoin = async () => {
        await agoraEngine.join(options.appId, options.channel, options.token, options.uid);

        // Create a local audio track from the audio sampled by a microphone.
        channelParameters.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();

        // Create a local video track from the video captured by a camera.
        channelParameters.localVideoTrack = await AgoraRTC.createCameraVideoTrack();

        // Append the local video container to the page body.

        // Publish the local audio and video tracks in the channel.
        await agoraEngine.publish([channelParameters.localAudioTrack, channelParameters.localVideoTrack]);

        // Play the local video track.
        channelParameters.localVideoTrack.play(localVideoRef.current!);
        console.log("publish success!");
    }

    const handleLeave = async () => {
        channelParameters.localAudioTrack?.close();
        channelParameters.localVideoTrack?.close();

        // Remove the containers you created for the local video and remote video.
        localVideoRef.current?.firstChild?.remove();
        remoteVideoRef.current?.firstChild?.remove();


        // Leave the channel
        await agoraEngine.leave();
        console.log("You left the channel");
        // Refresh the page for reuse
    }

    useEffect(() => {

        const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
        const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
        const SpeechRecognitionEvent =
            window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.start();

        recognition.onresult = (event) => {
            console.log(event.results[event.results.length - 1], event.results.length, typeof event.results);
            setTranscript(event.results[event.results.length - 1][0].transcript);
        };

        agoraEngine.on("user-published", async (user: IAgoraRTCRemoteUser, mediaType) => {
            // Subscribe to the remote user when the SDK triggers the "user-published" event.
            await agoraEngine.subscribe(user, mediaType);
            console.log("subscribe success: ", { user, mediaType });
            // Subscribe and play the remote video in the container If the remote user publishes a video track.
            if (mediaType == "video") {
                // Retrieve the remote video track.
                channelParameters.remoteVideoTrack = user.videoTrack;
                // Retrieve the remote audio track.
                channelParameters.remoteAudioTrack = user.audioTrack;
                // Save the remote user id for reuse.
                channelParameters.remoteUid = user.uid.toString();

                // Specify the ID of the DIV container. You can use the uid of the remote user.

                remoteVideoRef.current!.id = user.uid.toString();
                channelParameters.remoteUid = user.uid.toString();
                // remoteVideoRef.current!.textContent = "Remote user " + user.uid.toString();
                // Append the remote container to the page body.

                // Play the remote video track.
                channelParameters.remoteVideoTrack?.play(remoteVideoRef.current!, {

                });
            }
            // Subscribe and play the remote audio track If the remote user publishes the audio track only.
            if (mediaType == "audio") {
                // Get the RemoteAudioTrack object in the AgoraRTCRemoteUser object.
                channelParameters.remoteAudioTrack = user.audioTrack;
                // Play the remote audio track. No need to pass any DOM element.
                channelParameters.remoteAudioTrack?.play();
            }

            agoraEngine.on("user-unpublished", user => {
                console.log(user.uid + "has left the channel");
            });

        });

        return () => {
            recognition.onresult = null;
            recognition.stop();
        }

    }, [])

    return (
        <div className="flex flex-col max-w-[1280px] w-full mx-auto">
            <div className="flex w-full flex-wrap xl:flex-nowrap items-center justify-center">
                <div className="w-1/2 m-2">
                    <h3 className="font-bold text-2xl">Remote</h3>
                    <div className="mt-4 w-[600px] h-[450px] border-2 border-blue-400" ref={remoteVideoRef} />

                </div>
                <div className="w-1/2 m-2">
                    <h3 className="font-bold text-2xl">Local</h3>
                    <div className="mt-4 w-[600px] h-[450px] border-2 border-blue-400" ref={localVideoRef} />
                </div>
            </div>

            <div className="flex w-full items-center justify-center mt-8">
                <button onClick={handleJoin} className="ring-2 ring-green-400 px-8 mx-8">
                    Join
                </button>
                <button onClick={handleLeave} className="ring-2 ring-red-400 px-8 mx-8">
                    Leave
                </button>
            </div>

            <div className="flex flex-col mt-10">
                {
                    // <h3 className="font-bold text-4xl">
                    //     Transcripts:
                    // </h3>
                }
                <p className="mt-8 italic font-medium text-3xl">
                    " {transcript} "
                </p>
            </div>
        </div>
    )
}

export default App