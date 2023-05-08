import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import './Usuario.scss'

export default function Usuario() {

    const userData =[ {name: "Marta", img:"/assets/bitmapCopy2@3x.png"}]

    return (
    <div className="user">
        {userData && userData.map((list,index) => 
        <div key={index} className="user_head">
            <div className="user_detail">
                <h2 className="user_title">{list.name}</h2>
                <p className="user_subtitle">Puedes ver y editar tu perfil</p>
            </div>
            <div className="user_detail">
                <img src={list.img} alt={list.name} className="user_img"/>
            </div>
        </div>
        )}
        <Footer/>
    </div>);
}