import React from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
function Chat() {
    const {roomId} = useParams(); 
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong></strong>
                        <StarBorderOutlinedIcon/>
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon/>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Chat
