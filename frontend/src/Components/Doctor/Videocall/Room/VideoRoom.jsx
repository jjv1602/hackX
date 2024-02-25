import React, { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import VideoPlayer from "./VideoPlayer/VideoPlayer"
import { BsFillMicFill, BsFillMicMuteFill, BsFillCameraVideoOffFill, BsCameraVideoFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import "./videoroom.css"
const APP_ID = "ba8d0a41ed5f4f699bc5066a9348f1b0";
const TOKEN = "007eJxTYDivXxdZxKsQdGCSTP2TwBM/bFnUmLJ3+9ZP2Pv5X4bZ6gwFhqREixSDRBPD1BTTNJM0M0vLpGRTAzOzREtjE4s0wySD58a3UhsCGRnUJP0YGRkgEMRnYchNzMxjYAAAC+YeXg==";
const CHANNEL = "main";
const client = AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8',
})

// Component VideoRoom
const VideoRoom = () => {
    let tracks;
    const [transcript, setTranscript] = useState("");
    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);
    const [mic, setMic] = useState(true);
    const [vd, setVd] = useState(true);
    const [localUid, setLocalUid] = useState(null);
    let toggleMic = async (e) => {
        setMic(!mic);
        if (localTracks[0].muted) {
            await localTracks[0].setMuted(false)
        } else {
            await localTracks[0].setMuted(true)
        }
    }

    let toggleCamera = async (e) => {
        setVd(!vd);
        if (localTracks[1].muted) {
            await localTracks[1].setMuted(false)

        } else {
            await localTracks[1].setMuted(true)
        }
    }
    const handleUserJoined = async (user, mediaType) => {
        console.log({ user, mediaType });
        await client.subscribe(user, mediaType);

        if (mediaType === 'video') {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            setUsers((previousUsers) => [...previousUsers, user]);
            if (!localUid) {
                setLocalUid(user.uid);
            }
        }

        if (mediaType === 'audio') {
            user.audioTrack.play();
        };
    }
    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    };

    useEffect(() => {
        client.on('user-published', handleUserJoined);
        client.on('user-left', handleUserLeft);

        client
            .join(APP_ID, CHANNEL, TOKEN, null)
            .then((uid) =>
                Promise.all([
                    AgoraRTC.createMicrophoneAndCameraTracks(),
                    uid,
                ])
            )
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                setLocalTracks(tracks);
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack,
                        audioTrack,
                    },
                ]);
                client.publish(tracks);
            });


        // Create a new instance of the SpeechRecognition API
        const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
        const language = "en-US"; // Change this to your desired language
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.start();
        recognition.onresult = (event) => {
            console.log("asdasdaafas");
            console.log(event.results[event.results.length - 1][0].transcript);
            setTranscript(transcript + event.results[event.results.length - 1][0].transcript);
        }
        return () => {
            for (let localTrack of localTracks) {
                localTrack.stop();
                localTrack.close();
            }
            recognition.onresult = null;
            recognition.stop();
            client.off('user-published', handleUserJoined);
            client.off('user-left', handleUserLeft);
            client.unpublish(tracks).then(() => client.leave());
        };
    }, []);

    return (
        <div
        // style={{ display: 'flex', justifyContent: 'center' }}
        >
            <div
                className='video_box'
            >
                {users.map((user) => {
                    if (user.uid !== localUid) {
                        return (
                            <VideoPlayer key={user.uid} user={user} />
                        )
                    }
                })}
            </div>
            <div>{transcript}</div>
            <div className="btnorder">
                {mic ? <button className="btn23" onClick={toggleMic}> <BsFillMicFill></BsFillMicFill> </button> : <button className="btn23" onClick={toggleMic}> <BsFillMicMuteFill></BsFillMicMuteFill> </button>}
                <button className="btn_leave" onClick={handleUserLeft}> <MdCall></MdCall> </button>
                {vd ? <button className="btn23" onClick={toggleCamera}><BsCameraVideoFill></BsCameraVideoFill></button> :
                    <button className="btn23" onClick={toggleCamera}><BsFillCameraVideoOffFill></BsFillCameraVideoOffFill></button>}
            </div>
            {/* <Button colorScheme='blue' onClick={handleStopTranscribeClick}>Stop</Button> */}
        </div>
    )
};



export default VideoRoom;