import React, { useEffect } from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import masIcon from '../../assets/MasIcon.png';
import "./HomeGuardian.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Footer from '../../Componentes/Footer/Footer.jsx';
import axios from 'axios';
import { api } from '../../Componentes/shared';

export default function HomeGuardian() {

    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida"); // quitar el acceso a los que no son guardian
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const [anuncios, setAnuncios] = useState([]);

    // get anuncios de guardian
    function getAnuncios() {
        axios.get( api + "/anuncios/getLocations/" + userInfo._id).then( res => {
            if(res.status === 200) {
                console.log( res );
                setAnuncios(res.data);
            } else {
                
            }
        })
    }

    useEffect(()=> {
        getAnuncios();
    }, [])

    return (

        <div>
            <img onClick={()=> navigate('/mi-perfil')} className="atras" src={backIcon} alt="back"></img>

            <p className="tusanuncios">Tus anuncios</p>
            <div className="addEspacio">

                { anuncios && anuncios.map((anuncio, index)=> <div key={index}>
                        <h3 className='addEspacio_title'>{ anuncio.title }</h3>
                        <p>Anuncio completado al 100%</p>
                        <img src={anuncio.image} alt={anuncios.title} className='addEspacio_img'/>
                    </div>
                )}
                
                <p className="addEspacio__texto">Añade otro espacio</p> 
                <Link to="/hacerse-guardian">
                    <img className="masIcon" src={masIcon} alt="masIcon"></img>
                </Link> 
                
            </div>

            <Footer></Footer>

        </div>
    )
}