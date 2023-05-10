import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import { Link } from "react-router-dom";
import './Usuario.scss';
import { useNavigate } from 'react-router-dom';

export default function Usuario() {

    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const userData = JSON.parse(localStorage.getItem("user"));

    return (
        <>
    <div className="user">

        <div className="user_head">
            <div className="user_detail">
                <h2 className="user_title">{userData.name}</h2>
                <p className="user_subtitle"><Link to="/editar-perfil">Puedes ver y editar tu perfil</Link></p>
            </div>
            <div className="user_detail">
                <img src={userData.image} alt={userData.name} className="user_img"/>
            </div>
        </div>

        <div className="user_list">
            <div className="user_list_details">
                <Link to="/hacerse-guardian"><h4>Conviértete en guardián</h4></Link>
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
                <Link to="/homeguardian"><h4>Publica tu anuncio o experiencia</h4></Link>
                <p></p>
            </div>
            <div className="user_list_details">
                <h4>Configuración</h4>
                <p></p>
            </div>
            <div className="user_list_details">
            <Link to="/logout"><h4>Logout</h4></Link>
                <p></p>
            </div>
        </div>
    </div>
        <Footer/></>
        );
}