import { useEffect, useRef, useState } from "react";
import socketIO from 'socket.io-client';
import "./chat.scss";
import { api } from '../../App';

const socket = socketIO.connect(api);
const userInfo = JSON.parse(localStorage.getItem("user")) || { name : "pepe", _id : "12345" };

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const lastMessageRef = useRef(null);
    
    useEffect(() => {
        socket.on('messageResponse', (data) => {
            setMessages([...messages, data])
        });  
    }, [socket, messages]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    function sendMessage(e) {
        e.preventDefault();
        socket.emit('message', {
            text: message,
            name: userInfo.name,
            id: `${socket.id}${userInfo._id}`,
            socketID: socket.id,
        });
        setMessage("");
    }

    return <>
        <div className="chat">
            { messages.map((message, index) => 
                     message.name === userInfo.name ? (
                        <div className="chat-conversation" key={index}>
                            <div><img src="/assets/usuario@3x.png" alt=""/></div>
                            <p>{message.text}</p>
                        </div>
                    ) : (
                        <div className="chat-conversation reverse">
                            <div><img src="/assets/usuario@3x.png" alt=""/></div>
                            <p>{message.text}</p>
                        </div>
                    )
                )
            }
            <div ref={lastMessageRef} />
        </div>
        <div className="chat-input">
            <form onSubmit={sendMessage}>
                <input type="text" placeholder="Escribe un mensaje" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    </>;
}