import React, { useEffect, useState } from 'react'
import st from './design.module.css';
import { Avatar, Box, Button, Flex, Grid, GridItem, Heading, useDisclosure } from '@chakra-ui/react'
import { AiFillHome, AiOutlineSetting, AiFillBell, AiOutlineFileText, AiOutlinePlusCircle } from "react-icons/ai";
import { FaFileMedicalAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Badge } from '@chakra-ui/react'
import Chatbox from './Chatbox/Chatbox';
import chats from '../Design/db.json';
import { FiHome } from "react-icons/fi";
import { BsFillSendFill, BsFillChatDotsFill, BsServer, BsFillCameraVideoFill, BsPeopleFill, BsChatSquareText } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import VideoRoom from '../Videocall/Room/VideoRoom';
import { GrDocumentText } from "react-icons/gr";
import Px from './Px/Px';
import Past from './PastMedical/Past';
import { HiPhoneMissedCall } from "react-icons/hi";
import { Input } from '@chakra-ui/react';
import axios from 'axios';
import { BiArrowBack } from "react-icons/bi";
import Transcript from './Transcript/Transcript';
import { MdOutlineTranscribe } from "react-icons/md";
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton
} from '@chakra-ui/react'
import { useClipboard } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Design = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(4);
    const placeholder = "http://localhost:3010/design";
    const { onCopy, value, setValue, hasCopied } = useClipboard("");

    const changemode = (i) => {
        setHover(i);
    }
    const homeHandler=()=>{
        navigate("/");
    }
    const [joined, setJoined] = useState(false);
    const [newmsg, setNew] = useState("");
    
    const [chatList, setChatList] = useState();

    // Add user btn modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const addMsg = async () => {
        console.log(newmsg);
        try {

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(`http://localhost:3000/chats`, {
                "id": Math.random().toString(36).substring(2, 7),
                "senderid": 6,
                "name": "Dr Random1",
                "msg": newmsg,
                "sender_dr": false
            }, config);

        } catch (error) {
            console.log("error");
        }
    }
    useEffect(() => {
        // Running using json server 
    // run this line in new terminal-  json-server --watch src/pages/db.json
        axios.get('http://localhost:3000/chats')
            .then(response => {
                setChatList(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [chatList]);
    return (
        <>
            <div className={st.main}>


                <div className={st.videobox}>
                    <div className={st.leftheading}>
                        <div className={st.backicpar}><div className={st.AiOutline}><h1><BiArrowBack></BiArrowBack></h1></div></div>
                        <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' borderColor={"#93b8ea"} border={"solid 4px #0658FD"} />
                        <div className={st.videocallwith}>Video call meeting with Dr Sudhanwa</div>
                        &nbsp;
                        <div className={st.onlinedot}> </div>
                        <Badge backgroundColor={'#DDFBFF'} className={st.badgeo} color={"#7191D9"} >1 Online </Badge>
                        <button className={st.btnadduser} onClick={onOpen}>
                            <div className={st.adduser}>
                                <div className={st.txtuser}>Add User </div>
                                <div><AiOutlinePlusCircle ></AiOutlinePlusCircle></div>
                            </div>
                        </button>

                        {/* Modal for add user */}
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Add User</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Flex mb={2}>
                                        <Input
                                            placeholder={placeholder}
                                            value={value}
                                            onChange={(e) => {
                                                setValue(e.target.value);
                                            }}
                                            mr={2}
                                        />

                                    </Flex>
                                </ModalBody>

                                <ModalFooter>
                                    <Button onClick={onCopy} mr={3}>{hasCopied ? "Copied!" : "Copy"}</Button>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </div>

                    <div className={st.videocomp}>

                        {!joined && (
                            <button class={st.joinroom} onClick={() => setJoined(true)}>

                                <BsServer></BsServer>
                                <div class={st.button_with_icon__label}>Join Room </div>
                            </button>
                        )}

                        {joined && <VideoRoom />}

                    </div>
                </div>
                <div className={st.rightbox}>
                    {
                        hover === 1 &&
                        <Px></Px>
                    }
                    {
                        hover === 3 &&
                        <div>
                            <Past></Past>
                        </div>
                    }
                   

                    {/* Transcript Tab */}
                    {
                        hover === 2 &&
                        <div className={st.aibox}>
                            <Transcript></Transcript>
                        </div>
                    }

                </div>
                {/* Right Navbar code */}
                <div className={st.navbar}>
                    <div className={st.Avatar}>
                        <Avatar
                            name='Prosper Otemuyiwa'
                            src='https://bit.ly/prosper-baba'
                            border='2px solid #0658FD'
                        />{' '}
                    </div>
                    <div className={st.navicon} onClick={homeHandler}><FiHome color='#7E8DF1' size="25px"></FiHome></div>
                    <hr id={st["hr"]}></hr>
                    <br></br>
                    <br></br>
                    <br></br>
                    <hr id={st["hr"]}></hr>
                    <div className={st.navparent}>
                        {hover === 1 ?
                            <div className={st.hoverborder_1t} onClick={() => changemode(1)}> <item className={st.item} id={st["i_1"]}><TbReportAnalytics color='#7E8DF1' size="25px"></TbReportAnalytics></item></div> :
                            <div className={st.hoverborder_1} onClick={() => changemode(1)}> <item className={st.item} id={st["i_1"]}><TbReportAnalytics color='#7E8DF1' size="25px"></TbReportAnalytics></item></div>
                        }
                        {hover === 2 ?
                            <div className={st.hoverborder_2t} onClick={() => changemode(2)}> <item className={st.item} id={st["i_2"]}><MdOutlineTranscribe color='#7E8DF1' size="25px"></MdOutlineTranscribe></item></div>
                            :
                            <div className={st.hoverborder_2} onClick={() => changemode(2)}> <item className={st.item} id={st["i_2"]}><MdOutlineTranscribe color='#7E8DF1' size="25px"></MdOutlineTranscribe></item></div>
                        }

                        {hover === 3 ?

                            <div className={st.hoverborder_3t} onClick={() => changemode(3)}> <item className={st.item} id={st["i_3"]}><AiOutlineFileText color='#7E8DF1' size="25px"></AiOutlineFileText></item></div>
                            :
                            <div className={st.hoverborder_3} onClick={() => changemode(3)}> <item className={st.item} id={st["i_3"]}><AiOutlineFileText color='#7E8DF1' size="25px"></AiOutlineFileText></item></div>
                        }
                    </div>
                    <hr id={st["hrbtm"]}></hr>

                </div>

            </div>
        </>
    )
}

export default Design
