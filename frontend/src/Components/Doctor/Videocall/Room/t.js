import React, { useEffect, useState } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng';
import VideoPlayer from "./VideoPlayer/VideoPlayer"
import { BsFillMicFill, BsFillMicMuteFill, BsFillCameraVideoOffFill, BsCameraVideoFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import "./videoroom.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
const APP_ID = "ba8d0a41ed5f4f699bc5066a9348f1b0";
const TOKEN = "007eJxTYJi1W3HTfe+GA+b7jb+a3O88LlWff0iSw9U8lXXfqU8SybwKDEmJFikGiSaGqSmmaSZpZpaWScmmBmZmiZbGJhZphkkG09PjUhoCGRnWX8tiZmSAQBCfhSE3MTOPgQEAO+ofHQ==";
const CHANNEL = "main";
const client = AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8',
})
const SpeechRecognition = window.webkitSpeechRecognition || window.speechRecognition;
const recognition = new SpeechRecognition();

// Component VideoRoom
const VideoRoom = () => {
    // Transcript Code 
    const [transContent, setTransContent] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [channel, setChannel] = useState(null);

    // Record transcript Function
    function handleTranscribeClick() {
        // console.log("Voice recognition is on.");
        // if (transContent.length) {
        //     setTransContent(transContent + " ");
        // }
        // recognition.start();
    }

    // Stopping navigation - This can come inside leave button
    function handleStopTranscribeClick() {
        // console.log("Voice recognition is off.");

        
        // recognition.onresult = function (event) {
        //     console.log("asdadasdaskmk#############################");
        //     const current = event.resultIndex;
        //     const transcript = event.results[current][0].transcript;
        //     setTransContent(transContent + transcript + "<br>");
        // };
        // recognition.stop();
    }
    let tracks;
    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);
    const [mic, setMic] = useState(true);
    const [vd, setVd] = useState(true);

    // Localuid for displaying larger image of user connected 
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

    // When new user joins
    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === 'video') {
            setUsers((previousUsers) => [...previousUsers, user]);
            if (!localUid) {
                setLocalUid(user.uid);
            }
        }

        if (mediaType === 'audio') {
            user.audioTrack.play();
        }
    };

    const handleUserLeft = (user) => {
        setUsers((previousUsers) =>
            previousUsers.filter((u) => u.uid !== user.uid)
        );
    };

    useEffect(() => {
        // CHECK WHETHER A CLIENT IS LEAVING OR JOINING THE MEETING
        // client.on('user-published', handleUserJoined);
        // client.on('user-left', handleUserLeft);

        // client
        //     .join(APP_ID, CHANNEL, TOKEN, null)
        //     .then((uid) =>
        //         Promise.all([
        //             AgoraRTC.createMicrophoneAndCameraTracks(),
        //             uid,
        //         ])
        //     )
        //     .then(([tracks, uid]) => {
        //         const [audioTrack, videoTrack] = tracks;
        //         setLocalTracks(tracks);
        //         setUsers((previousUsers) => [
        //             ...previousUsers,
        //             {
        //                 uid,
        //                 videoTrack,
        //                 audioTrack,
        //             },
        //         ]);
        //         client.publish(tracks);
            // });

        // return () => {
        //     for (let localTrack of localTracks) {
        //         localTrack.stop();
        //         localTrack.close();
        //     }
        //     client.off('user-published', handleUserJoined);
        //     client.off('user-left', handleUserLeft);
        //     client.unpublish(tracks).then(() => client.leave());
        // };
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
            <div className="btnorder">
                {mic ? <button className="btn23" onClick={toggleMic}> <BsFillMicFill></BsFillMicFill> </button> : <button className="btn23" onClick={toggleMic}> <BsFillMicMuteFill></BsFillMicMuteFill> </button>}
                <button className="btn_leave" onClick={handleUserLeft}> <MdCall></MdCall> </button>
                {vd ? <button className="btn23" onClick={toggleCamera}><BsCameraVideoFill></BsCameraVideoFill></button> :
                    <button className="btn23" onClick={toggleCamera}><BsFillCameraVideoOffFill></BsFillCameraVideoOffFill></button>}
            </div>
            <Button colorScheme='blue' onClick={handleTranscribeClick} mr={5}>Record</Button>
            <Button colorScheme='blue' onClick={handleStopTranscribeClick}>Stop</Button>
        </div>
    )
};



export default VideoRoom;
