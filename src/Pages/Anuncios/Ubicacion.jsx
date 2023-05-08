import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom';
import Fotos from './Fotos';



export default function Ubicacion(props) {

    const {onChangeDireccion, setPaginas} = props;

    
    const handleOnChange = (event) => {
        onChangeDireccion(event.target.value);
      };


    const handleVolverClick = () => {
        setPaginas(0);
      };



    return (

        <div>

                <div>

                   
                    <img onClick={props.onBackClick} className="atras" src={backIcon} alt="back"></img>
                   

                    <p className="anuncios__titular">Tu ubicación</p>

                    <div className="inputs__container">

                        <div className="input__container">
                            <label for="input01">Especifica tu ubicación</label>
                            <input
                                type="text" id="input01" placeholder='Madrid'
                                className="inputComponente"
                                value={props.direccion}
                                onChange={handleOnChange}
        
                            ></input>


                        </div>
                    </div>
                </div>

        </div>
    )
}