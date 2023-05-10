import React, { useContext } from "react"
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import "./DetallesReserva.scss";
import Footer from "../../Componentes/Footer/Footer";
import { useState } from "react";
import reservar from '../../assets/botonReservar.png';
import ReservaCompletada from "./ReservaCompletada";
import { VariablesContext } from "../../Shared/VariablesContext";
import axios from "axios";
import { api } from "../../Componentes/shared";

export default function DetallesReserva() {

    const [paginas, setPaginas] = useState(0);
    const {reserva, setReserva} = useContext(VariablesContext);

    const handleBotonClick = () => {
        axios.post( api + "/anuncios/newReserva", reserva).then( res => {
            if(res.status === 200) {
                //console.log( res );
                setPaginas(paginas + 1);
                setReserva({
                    time_in: "00:00",
                    time_out: "00:00",
                    cuantity: 0,
                    date_in: "",
                    date_out: "",
                    location: ""
                  });
            }
        })
    };

    return (

        <div>

            {paginas===0 && (

            <div>

                <a href="javascript:history.back()">
                    <img className="atras" src={backIcon} alt="back"></img>
                </a>

                <div>
                    <p className="detalle__titular">Detalles de tu reserva</p>
                </div>

                <div className="subtitulo__container">
                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">LLegada</p>
                        <p className="detalle__subtitulo--info">{reserva.date_in}</p>
                    </div>

                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">Recogida</p>
                        <p className="detalle__subtitulo--info">{reserva.date_out}</p>
                    </div>

                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">Equipaje</p>
                        <p className="detalle__subtitulo--info">{reserva.cuantity}</p>
                    </div>
                </div>

                <div className="detalles__pedido">

                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Primeras 24 horarios</p>
                            <p className="resumen__detalle"> 6,00 x {reserva.cuantity} equipajes</p>
                        </div>
                        <p className="resumen__precio"> {5 * reserva.cuantity} € </p>
                    </div>

                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Gastos de gestión</p>
                        </div>
                        <p className="resumen__precio"> {reserva.cuantity} € </p>
                    </div>

                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Servicio asegurado</p>
                            <p className="resumen__detalle">hasta 1000€ </p>
                        </div>
                        <p className="resumen__precio"> Gratis </p>
                    </div>

                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Total</p>
                        </div>
                        <p className="resumen__precio"> {6*reserva.cuantity}€ </p>
                    </div>

                <div className="boton__reservar">
                <img onClick={handleBotonClick}   className="continuar" src={reservar} alt="reservar"></img>
                </div>   

                </div>





                <Footer></Footer>

            </div>
        
            )}

        { (paginas===1) && (
            <ReservaCompletada/>
        )}






        </div>
    )
        
        
}