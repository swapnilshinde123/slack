import React from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
function Chat() {
    const {roomId} = useParams(); 
    return (
        <div className="chat">
            <h2>you are in the {roomId}room</h2>
            
        </div>
    )
}

export default Chat
