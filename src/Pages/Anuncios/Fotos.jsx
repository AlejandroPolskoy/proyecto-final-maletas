import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom';



export default function Fotos(props) {

    const {onChangeFotos, setPaginas} = props;

    
    const handleOnChange = (event) => {
        onChangeFotos(event.target.files[0]);
      };


    const handleVolverClick = () => {
        setPaginas(0);
      };



    return (

        <div>

                <div>

                   
                    <img onClick={props.onBackClick} className="atras" src={backIcon} alt="back"></img>
                   

                    <p className="anuncios__titular">Sube fotos de tu espacio</p>

                    <div className="inputs__container">

                        <div className="input__container">
                            <label for="input01">Selecciona tus fotos</label>
                            <input
                                type="file" id="input02"
                                className="input"
                                onChange={handleOnChange}
        
                            ></input>


                        </div>
                    </div>
                </div>

        </div>
    )
}