import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom'



export default function Disponibilidad(props) {




    return (

        <div>

            <img onClick={props.onBackClick} className="atras" src={backIcon} alt="back"></img>

            <p className="anuncios__titular">Especifica tu disponibilidad</p>

            <div className="inputs__container">

                <div className="input__container">
                    <label for="input01">Disponibilidad de tu espacio</label>
                    <input
                        type="text" id="input01" 
                        className="input"
                    ></input>

                </div>
            </div>

            


        </div>
    )
}