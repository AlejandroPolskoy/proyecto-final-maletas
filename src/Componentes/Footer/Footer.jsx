// import { useState } from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Footer() {

    const location = useLocation()
    
    const isUserPage = location.pathname.includes('/usuario/');
    
    return (
        <div className="footer">
            <nav>
                    { isUserPage ? (<div className='footer_nav nav-2'>
                    <Link to="/"><img src="/assets/mensaje@3x.png" alt="Icono mensajes"/></Link>
                    <Link to="/"><img src="/assets/megaphone@3x.png" alt="Icono anuncio"/></Link>
                    <Link to="/"><img src="/assets/calendar@3x.png" alt="Icono calendario"/></Link>
                    <Link to="/usuario/:id"><img src="/assets/usuario@3x.png" alt="Icono usuario"/></Link>
                    </div>) :
                    (<div className='footer_nav nav-1'>
                        <Link to="/"><img src="/assets/inicio@3x.png" alt="Icono inicio"/></Link>
                        <Link to="/"><img src="/assets/buscar@3x.png" alt="Icono buscar"/></Link>
                        <Link to="/"><img src="/assets/mensaje@3x.png" alt="Icono mensajes"/></Link>
                        <Link to="/usuario/:id"><img src="/assets/usuario@3x.png" alt="Icono usuario"/></Link>
                    </div>)}
            </nav>
        </div>
    );
}