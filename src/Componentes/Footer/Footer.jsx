// import { useState } from 'react';
import { useContext } from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { VariablesContext } from '../../Shared/VariablesContext';

export default function Footer() {

    const location = useLocation()
    
    //const isUserPage = /\/(usuario|reserva|hacerse-guardian|homeguardian)$/.test(location.pathname);
    const isUserPage = location.pathname == "/";

    const userInfo = JSON.parse(localStorage.getItem("user")) || {};
    
    const {isNewMessages} = useContext(VariablesContext);

    return (
        <div className="footer">
            <nav>
                { isUserPage && userInfo.role === "guardian" ? (<div className='footer_nav nav-2'>
                    <Link to="/chat"><img src="/assets/mensaje@3x.png" alt="Icono mensajes"/></Link>
                    <Link to="/homeguardian"><img src="/assets/megaphone@3x.png" alt="Icono anuncio"/></Link>
                    <Link to="/reserva"><img src="/assets/calendar@3x.png" alt="Icono calendario"/></Link>
                    <Link to={"/mi-perfil"}><img src="/assets/usuario@3x.png" alt="Icono usuario"/></Link>
                </div>) :
                (<div className='footer_nav nav-1'>
                    <Link to="/"><img src="/assets/inicio@3x.png" alt="Icono inicio"/></Link>
                    <Link to="/maps"><img src="/assets/buscar@3x.png" alt="Icono buscar"/></Link>
                    <Link to="/chat"><img src={isNewMessages ? "/assets/newmensaje@3x.png" : "/assets/mensaje@3x.png"} alt="Icono mensajes"/></Link>
                    <Link to={"/mi-perfil"}><img src="/assets/usuario@3x.png" alt="Icono usuario"/></Link>
                </div>) }
            </nav>
        </div>
    );
}
