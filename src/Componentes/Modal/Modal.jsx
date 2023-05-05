import React, { useState } from "react";
import "./Modal.scss";
import { NavLink } from "react-router-dom";

export const Modal = ({ mostrar }) => {

    const [show, setShow] = useState(true);

    return (
        <>
            {mostrar ? (
                <div className="modalContainer">
                    <div className="modal">
                    {show ? (<div className="step-1">
                            <img src="assets/cadena@3x.png" alt="icono de cadena" className="modal_img" />
                            <div className="modal_txt">
                                <h2>Préparate para
                                    <br /> liberarte de tu equipaje</h2>
                                <p>
                                    Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios
                                    ya están aprovechando las ventajas.
                                </p>
                            </div>
                            <button className="modal_btn" onClick={() => { setShow(!show); }}>Continuar</button>
                        </div>) : 
                        (<div className="step-2">
                            <img src="assets/world@3x.png" alt="icono del mundo" className="modal_img" />
                            <div className="modal_txt">
                                <h2>El mismo precio
                                    <br/>en cualquier parte</h2>
                                <p>
                                Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso.
                                </p>
                            </div>
                            <button className="modal_btn"><NavLink to="/login">Empezar Ya</NavLink></button>
                            <p><NavLink to="/tarifas" >Consulta los precios</NavLink></p>
                        </div>)}
                    </div>
                </div>
            ) : null}
        </>
    );
};
