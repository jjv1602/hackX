import React from 'react'

import st from "./Chatbox.module.css"
import { Avatar, AvatarBadge, AvatarGroup, IconButton } from '@chakra-ui/react'
import { Button, FormControl, Input } from '@chakra-ui/react'
import { AiOutlineArrowRight } from "react-icons/ai";
const Chatbox = (props) => {
    return (
        <>
            <div className={st.parent}>
                <div className={st.You_msg}>
                    {!props.sender_dr && <Avatar size='sm' className={st.Avatar} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />}
                    {/* <div className={st.msg}> */}
                    <div className={`${props.sender_dr ? st.msgd : st.msg}`}>
                        <heading className={st.msg_header}>{props.name} </heading>
                        {props.msg}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Chatbox
