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
    
    // calculos
    let dias = Math.round((reserva.date_out - reserva.date_in) / (1000 * 60 * 60 * 24) );
    const precio = 6;
    const precioAlDia = 4;

    const handleBotonClick = () => {
        axios.post( api + "/anuncios/newReserva", reserva).then( res => {
            if(res.status === 200) {
                setPaginas(paginas + 1);
                setReserva({
                    time_in: "00:00",
                    time_out: "00:00",
                    cuantity: 1,
                    date_in: "",
                    date_out: "",
                    location: "",
                    locationString: ""
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
                        <p className="detalle__subtitulo--info">{(typeof reserva.date_in) == "object" && reserva.date_in.toLocaleDateString('en-GB')}</p>
                    </div>

                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">Recogida</p>
                        <p className="detalle__subtitulo--info">{(typeof reserva.date_in) == "object" && reserva.date_out.toLocaleDateString('en-GB')}</p>
                    </div>

                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">Equipaje</p>
                        <p className="detalle__subtitulo--info">{reserva.cuantity}</p>
                    </div>
                </div>

                <div className="detalles__pedido">

                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Primeras 24 horas</p>
                            <p className="resumen__detalle"> {precio} x {reserva.cuantity} equipajes</p>
                        </div>
                        <p className="resumen__precio"> {precio * reserva.cuantity} € </p>
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
                        <p className="resumen__precio"> {precio*reserva.cuantity + (dias - 1)*reserva.cuantity*precioAlDia}€ </p>
                    </div>

                    <div className="boton__reservar">
                        <img onClick={handleBotonClick} className="continuar" src={reservar} alt="reservar"></img>
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