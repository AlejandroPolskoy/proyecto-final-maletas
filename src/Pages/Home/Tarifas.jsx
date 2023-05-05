import React from "react";
import { useState } from "react";
import "./Tarifas.scss"
import backIcon from '../../assets/icons8Back100Copy@3x.png';



export default function Tarifas() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    
    }

    return(

        <div className="container">
            
            <a href="javascript:history.back()">
                <img className="atras" src={backIcon} alt="back"></img>
            </a>
            

            <div className="selecciona__container">
                <div>
                    <p className="subtitulo">Selecciona</p>
                </div>
                <select className="select__container--caja" id="options" value={selectedOption} onChange={handleOptionChange}>
                    <option className="select__item" value="opcion1">Europa</option>
                    <option className="select__item" value="opcion2">Asia</option>
                    <option className="select__item" value="opcion3">América</option>
                    <option className="select__item" value="opcion4">África</option>
                    <option className="select__item" value="opcion5">Oceanía</option>

                </select>
            </div>


            <div className="tarifas__container">

               
                <p className="subtitulo">Nuestras tarifas fijas</p>
                

                <div className="tarifas__tarjetas">

                    <div className="tarifas__tarjeta01">
                        <p className="tarifas__tarjeta--texto">24 Horas</p>
                        <p className="tarifas__tarjeta--numero">6€</p>
                        <p className="tarifas__tarjeta--texto">Por equipaje</p>
                    </div>

                    <div className="tarifas__tarjeta02">
                        <p className="tarifas__tarjeta--texto">Día adicional</p>
                        <p className="tarifas__tarjeta--numero">4€</p>
                        <p className="tarifas__tarjeta--texto">Por equipaje</p>
                    </div>
                </div>
            
            

            </div>

        </div>



    )
}