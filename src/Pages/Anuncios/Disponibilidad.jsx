import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom'
import Ubicacion from './Ubicacion';
import Fotos from './Fotos';
import Titulo from './Titulo';
import Servicios from './Servicios';
import HacerseGuardian from './HacerseGuardian';



export default function Disponibilidad(props) {

    const {onChangePropiedad, setSelectedDisponibilidad, setSelectedDisponibilidad02, selectedDisponibilidad, selectedDisponibilidad02, setPaginas} = props;

    const [modalShow, setModalShow] = useState(false);
  
    const [modalShow02, setModalShow02] =useState(false);



    const handleInputClick = () => {
        setModalShow(true);
    };


    const handleOptionClick = (option) => {
        setSelectedDisponibilidad(option);
        setModalShow(false);
    };

    const handleOptionClick02 = (option) => {
        setSelectedDisponibilidad02(option);
        setModalShow02(false);
    };

    const handleInputClick02 = () => {
        setModalShow02(true);
    }

    

    const handleOnChange = (event) => {
        onChangePropiedad(event.target.value);
      };


    return (

        <div>

                <div>

                    
                    <img onClick={props.onBackClick} className="atras" src={backIcon} alt="back"></img>
                

                    <p className="anuncios__titular">Disponibilidad</p>

                    <div className="inputs__container">

                        <div className="input__container">
                            <label for="input00">Especifica tus días disponibles</label>
                            <input
                                type='text' id="input00" placeholder='Selecciona una opción'
                                className="inputComponente"
                                onClick={handleInputClick}
                                value={selectedDisponibilidad}
                                onChange={handleOnChange}

                            ></input>


                            <div className="input__container"></div>
                            <label for="input01">Especifica tu horario disponible</label>
                            <input type='text' id="input02" placeholder='Selecciona una opción'
                            className="inputComponente"
                            onClick = {handleInputClick02}
                            value={selectedDisponibilidad02}
                            ></input>
                        </div>
                    </div>

                    <div className="modal__container" style={{display: modalShow ? "block" : "none"}}>
                        <div className="modal__content">
                            <p onClick={() => handleOptionClick("Lunes - Viernes")}>Lunes - Viernes</p>
                            <p onClick={() => handleOptionClick("Fin de semana")}>Fin de semana</p>
                            <p onClick={() => handleOptionClick("Ambos")}>Ambos</p> 
                        </div>
                    </div>

                    <div className="modal__container02" style={{display: modalShow02 ? "block" : "none"}}>
                        <div className="modal__content02">
                            <p onClick={() => handleOptionClick02("Mañana")}>Mañana</p>
                            <p onClick={() => handleOptionClick02("Tarde")}>Tarde</p>
                            <p onClick={() => handleOptionClick02("Ambos")}>Ambos</p> 
                            
        

                        </div>
                    </div>
                </div>

        </div>
    )
}