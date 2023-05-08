import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import { Link } from "react-router-dom";
import './Usuario.scss'

export default function Usuario() {

    const userData =[ {name: "Marta", img:"/assets/bitmapCopy2@3x.png"}]

    return (
    <div className="user">
        {userData && userData.map((list,index) => 
        <div key={index} className="user_head">
            <div className="user_detail">
                <h2 className="user_title">{list.name}</h2>
                <p className="user_subtitle"><Link to="/">Puedes ver y editar tu perfil</Link></p>
            </div>
            <div className="user_detail">
                <img src={list.img} alt={list.name} className="user_img"/>
            </div>
        </div>
        )}
        <div className="user_list">
            <div className="user_list_details">
                <h4>Conviértete en guardián</h4>
                <p>Puedes ganar 400€ de media al mes</p>
            </div>
            <div className="user_list_details">
                <h4>Invita a tus amigos</h4>
                <p>Y podrás ganar descuentos para ti</p>
            </div>
            <div className="user_list_details">
                <h4>Créditos y descuentos</h4>
                <p></p>
            </div>
            <div className="user_list_details">
                <h4>Publica tu anuncio o experiencia</h4>
                <p></p>
            </div>
            <div className="user_list_details">
                <h4>Configuración</h4>
                <p></p>
            </div>
            <div className="user_list_details">
                <h4>Ayuda</h4>
                <p></p>
            </div>
        </div>
        <Footer/>
    </div>);
}