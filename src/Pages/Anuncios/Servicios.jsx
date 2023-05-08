import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom'



export default function Servicios(props) {

    const {onChangeServicio, setPaginas} = props;

    
    const handleOnChange = (event) => {
        onChangeServicio(event.target.value);
      };


    const handleVolverClick = () => {
        setPaginas(0);
      };


    return (

        <div>

                <div>

                   
                    <img onClick={props.onBackClick} className="atras" src={backIcon} alt="back"></img>
                   

                    <p className="anuncios__titular">Servicios</p>

                    <div className="inputs__container">

                        <div className="input__container">
                            <label for="input01">Nº de Maletas</label>
                            <input
                                type="number" id="input01"
                                className="inputComponente"
                                value={props.servicio}
                                onChange={handleOnChange}
        
                            ></input>


                        </div>
                    </div>
                </div>

           
            <img onClick={props.onVolverClick} className="flecha" src={flecha} alt="back"></img>
            

            


        </div>
    )
}