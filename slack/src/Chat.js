import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Chat.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId)
                .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
        }
        db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) =>
                setRoomMessages(snapshot.docs.map((doc) => doc.data()))
            );
    }, [roomId]);
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon />
                    </p>
                </div>

            </div>
            <div className="chat_messages">
                {roomMessages.map(({ messages, timestamp, user, userImage }) => (
                    <Message
                        messages={messages}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat
