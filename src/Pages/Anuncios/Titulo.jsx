import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom';
import Fotos from './Fotos';



export default function Titulo(props) {

    const {onChangeTitulo, setPaginas} = props;

    
    const handleOnChange = (event) => {
        onChangeTitulo(event.target.value);
      };


    const handleVolverClick = () => {
        setPaginas(0);
      };



    return (

        <div>

                <div>

                   
                    <img onClick={props.onBackClick} className="atras" src={backIcon} alt="back"></img>
                   

                    <p className="anuncios__titular">Título</p>

                    <div className="inputs__container">

                        <div className="input__container">
                            <label for="input01">Título de tu espacio</label>
                            <input
                                type="text" id="input01" placeholder='Ej: El Hall de Marta'
                                className="input"
                                value={props.direccion}
                                onChange={handleOnChange}
        
                            ></input>


                        </div>
                    </div>
                </div>

        </div>
    )
}