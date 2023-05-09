import React from "react"
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import "./DetallesReserva.scss";
import Footer from "../../Componentes/Footer/Footer";
import { useState } from "react";
import reservar from '../../assets/botonReservar.png';
import ReservaCompletada from "./ReservaCompletada";

export default function DetallesReserva() {

    const [paginas, setPaginas] =useState(0);



    const handleBotonClick = () => {
        setPaginas(paginas + 1);
    };

    const handleBack = () => {
        setPaginas(paginas - 1);
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
                        <p className="detalle__subtitulo--info">30 de Julio</p>
                    </div>

                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">Recogida</p>
                        <p className="detalle__subtitulo--info">30 de Julio</p>
                    </div>

                    <div className="subtitulo__bloque">
                        <p className="detalle__subtitulo--negrita">Equipaje</p>
                        <p className="detalle__subtitulo--info">2 Equipajes</p>
                    </div>
                </div>




                <div className="detalles__pedido">

                
                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Primeras 24 horarios</p>
                            <p className="resumen__detalle"> 6,00 x 2 equipajes</p>
                        </div>

                        <p className="resumen__precio"> 10€ </p>
                        

                    </div>

                    <div className="resumen__container">
                        <div className="detalle__container">
                            <p className="resumen__detalle">Gastos de gestión</p>
                        </div>

                        <p className="resumen__precio"> 2€ </p>
                        

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

                
                        <p className="resumen__precio"> 12€ </p>


                    </div>

                <div className="boton__reservar">
                <img onClick = {handleBotonClick}   className="continuar" src={reservar} alt="reservar"></img>
                </div>   

                </div>





                <Footer></Footer>

            </div>
        
            )}

        { (paginas===1) && (
        <ReservaCompletada
        onBackClick= {handleBack}/>)}






        </div>
    )
        
        
}