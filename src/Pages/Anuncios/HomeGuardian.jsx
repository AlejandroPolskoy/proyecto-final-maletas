import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import masIcon from '../../assets/MasIcon.png';
import "./HomeGuardian.scss";
import { Link } from 'react-router-dom';
import Footer from '../../Componentes/Footer/Footer.jsx';



export default function HomeGuardian() {

    

    return (

        <div>

            <a href="javascript:history.back()">
                <img className="atras" src={backIcon} alt="back"></img>
            </a>
            

            <p className="tusanuncios">Tus anuncios</p>




            <div className="addEspacio">

                <p className="addEspacio__texto">Añade otro espacio</p> 
                <Link to="/anuncios"> 
                    <img className="masIcon" src={masIcon} alt="masIcon"></img>
                </Link> 

            </div>

            <Footer></Footer>



        </div>
    )
}