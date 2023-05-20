import { useEffect, useState } from "react"
import { api } from "../../Componentes/shared";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Componentes/Footer/Footer";

export default function ChatList() {
    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const [conversations, setConversations] = useState([]);

    useEffect(()=> {
        axios.get(api + "/chat/getAllConversations/" + userInfo._id).then((res)=>{
            console.log( res.data );
            setConversations( res.data );
        });
    }, []);

    function chat( id ) {
        navigate("/chat/"+id);
    }

    return <div>
        { conversations && conversations.map((conversation, index)=> <div key={index} className="reserva_user">
            <div className="reserva_user_all">
                <div className="reserva_user_top">
                  <div className="reserva_user_img">
                      <img src={conversation.location.owner.image} alt={conversation.location.owner.name} className="user_img"/>
                  </div>
                  <div className="reserva_user_detail">
                      <h4 className="user_title">{`${conversation.location.owner.name} ${conversation.location.owner.surname}`}</h4>
                  </div>
                </div>
                <div className="reserva_user_btn">
                    <button onClick={()=> chat(conversation._id)}>Chat</button>
                </div>
            </div>
        </div>    
        )}
        { !conversations || conversations.length == 0 && <p>No hay chats activos</p>}
        <Footer/>
    </div>
}