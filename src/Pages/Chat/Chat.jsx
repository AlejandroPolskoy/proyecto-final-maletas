import { useContext, useEffect, useRef, useState } from "react";
import socketIO from 'socket.io-client';
import "./chat.scss";
import { api } from "../../Componentes/shared";
import { VariablesContext } from "../../Shared/VariablesContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const userInfo = JSON.parse(localStorage.getItem("user")) || { name : "pepe", _id : "12345" };
const socket = socketIO(api, { autoConnect: false });
socket.connect();

export default function Chat() {
    const {messages, setMessages, setNotification} = useContext(VariablesContext);
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]); // ???
    const lastMessageRef = useRef(null); // auto-scroll
    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const {id} = useParams();
    
    useEffect(()=> {
        socket.emit('newUser', { userName: userInfo.name, userID: userInfo._id, userImage: userInfo.image, roomID: id, socketID: socket.id });
        axios.get(api + "/chat/getConversation/" + id).then((res)=>{
            setMessages(res.data);
        })
    }, [])

    useEffect(()=>()=> {
        setNotification(false);
    })

    useEffect(() => {
        socket.on('messageResponse', (data) => {
            setMessages([...messages, data]);
        });
    }, [socket, messages]);

    useEffect(() => {
        socket.on('newUserResponse', (data) => {
            setUsers(data);
        });
    }, [socket, users]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    function sendMessage(e) {
        e.preventDefault();
        const newMessage = {
            text: message,
            name: userInfo.name,
            userID: userInfo._id,
            userImage: userInfo.image,
            roomID: id,
        }
        socket.emit('message', newMessage);
        setMessage("");
        setMessages([...messages, newMessage]);
    }

    return <>
        <header className="chat-header">
            <img onClick={()=> navigate('/chat')} src="/assets/icons8Back100Copy@2x.png" alt="back" className="back-img"/>
            <h2 className="chat-name"> {userInfo.name} </h2>
        </header>
        <div className="chat">
            { messages.map((message, index) => 
                    message.name === userInfo.name ? (
                        <div className="chat-conversation" key={index}>
                            <div className="img__container">
                                <img src={userInfo.image} alt="profile"/>
                            </div>
                            <p className="texto__user01">{message.text}</p>
                        </div>
                    ) : (
                        <div className="chat-conversation reverse" key={index}>
                            <div className="img__container">
                                <img src={message.userImage} alt="profile"/>
                            </div>
                            <p className="texto__user02">{message.text}</p>
                        </div>
                    )
                )
            }
            <div ref={lastMessageRef} />
        </div>
        <div className="chat-input">
            <form onSubmit={sendMessage}>
                <input type="text" placeholder="Escribe un mensaje..." value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <input  className="enviar" type="submit" value="Enviar"/>
            </form>
        </div>
    </>;
}