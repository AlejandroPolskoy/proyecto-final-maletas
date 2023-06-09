import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import "./Anuncios.scss";
import { Link } from 'react-router-dom'
import Ubicacion from './Ubicacion';
import Fotos from './Fotos';
import Titulo from './Titulo';
import Disponibilidad from './Disponibilidad';
import Servicios from './Servicios';
import HacerseGuardian from './HacerseGuardian';



export default function Anuncios(props) {

    const {onChangePropiedad, setSelectedOption, setSelectedOption02, selectedOption, selectedOption02, setPaginas} = props;

    const [modalShow, setModalShow] = useState(false);
  
    const [modalShow02, setModalShow02] =useState(false);



    const handleInputClick = () => {
        setModalShow(true);
    };


    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setModalShow(false);
    };

    const handleOptionClick02 = (option) => {
        setSelectedOption02(option);
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
                

                    <p className="anuncios__titular">Descríbenos tu espacio</p>

                    <div className="inputs__container">

                        <div className="input__container">
                            <label htmlFor="input00">Especifica tu propiedad</label>
                            <input
                                type='text' id="input00" placeholder='Selecciona una opción'
                                className="inputComponente"
                                onClick={handleInputClick}
                                defaultValue={selectedOption}
                                onChange={handleOnChange}

                            ></input>


                            <div className="input__container"></div>
                            <label htmlFor="input01">¿Qué tipo de espacio?</label>
                            <input type='text' id="input02" placeholder='Selecciona una opción'
                            className="inputComponente"
                            onClick = {handleInputClick02}
                            defaultValue={selectedOption02}
                            ></input>
                        </div>
                    </div>

                    <div className="modal__container" style={{display: modalShow ? "block" : "none"}}>
                        <div className="modal__content">
                            <p onClick={() => handleOptionClick("Casa")}>Casa</p>
                            <p onClick={() => handleOptionClick("Hotel")}>Hotel</p>
                            <p onClick={() => handleOptionClick("Establecimiento")}>Establecimiento</p> 
                        </div>
                    </div>

                    <div className="modal__container" style={{display: modalShow02 ? "block" : "none"}}>
                        <div className="modal__content">
                            <p onClick={() => handleOptionClick02("Habitación")}>Habitación</p>
                            <p onClick={() => handleOptionClick02("Hall")}>Hall</p>
                            <p onClick={() => handleOptionClick02("Trastero")}>Trastero</p> 
                            <p onClick={() => handleOptionClick02("Buhardilla")}>Buhardilla</p>
                            <p onClick={() => handleOptionClick02("Garaje")}>Garaje</p> 
                        </div>
                    </div>
                </div>

        </div>
    )
}