import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import Novedades from "../../Componentes/Novedades/Novedades";
import Experiencias from "../../Componentes/Experiencias/Experiencias";
import Calendario from "../../Componentes/Calendario/Calendario";
import CalendarioEnd from "../../Componentes/Calendario/CalendarioEnd";
import ModalHorario from "../../Componentes/ModalHorario/ModalHorario";
import Busqueda from "../../Componentes/Busqueda/Busqueda";
import Footer from "../../Componentes/Footer/Footer";
import { VariablesContext } from "../../Shared/VariablesContext";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  if(!localStorage.getItem("user")) navigate("/bienvenida");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  //Datos de calendario
  const [showModal, setShowModal] = useState(0);
  const {setReserva, reserva} = useContext(VariablesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [isModalOpen]);

  //Funciones
  const closeModal = () => {
    setShowModal(0);
    setIsModalOpen(false);
  };

  const handleModalOpen = (modalNumber) => {
    setShowModal(modalNumber);
    setIsModalOpen(true);
  };

  function buscar(e) {
    e.preventDefault();
    navigate("/lista-anuncios");
    setReserva({...reserva, user: userInfo._id});
  }

  return (
    <>
      <div className="search-section">
        <h1 className="search-title"> Encuentra tu guardián </h1>

        <form className="form-search">
          <div className="form-search_big">
            <img className="search-bimg" src="/assets/lupa@2x.png" alt="lupa" />
            <input
              onClick={()=> navigate('/maps')}
              className="search-big"
              type="text"
              placeholder="¿Dónde te encuentras? Madrid, Barcelona…"
              value={reserva.location ? reserva.location : ''}
            />
          </div>
          <div className="form-search_div">
            <img
              className="search-img"
              src="/assets/calendario@2x.png"
              alt="calendar"
            />
            <input
              onClick={() => handleModalOpen(1)}
              className="search-input"
              type="text"
              placeholder="Depósito"
              defaultValue={reserva.date_in ? reserva.date_in : ""}
            />
          </div>
          <div className="form-search_div">
            <img
              className="search-img"
              src="/assets/calendario@2x.png"
              alt="calendar"
            />
            <input
              onClick={() => handleModalOpen(2)}
              className="search-input"
              type="text"
              placeholder="Retirada"
              defaultValue={reserva.date_out ? reserva.date_out : ""}
            />
          </div>
          <div className="form-search_div">
            <img
              className="search-img"
              src="/assets/maletita@2x.png"
              alt="calendar"
            />
            <input
              className="search-input"
              type="number"
              placeholder="Nº de piezas"
              value={reserva.cuantity !== 0 ? reserva.cuantity : ""}
            />
          </div>

          <button className="search-button" onClick={buscar}> Buscar </button>
        </form>
        <Novedades />
        <Experiencias />

        {/*Modales*/}
        
        {showModal === 1 && (
          <Calendario setReserva={setReserva} reserva={reserva} closeCal={closeModal} />
        )}
        {showModal === 2 && (
          <CalendarioEnd
            setShowModal={setShowModal}
            reserva={reserva}
            setReserva={setReserva}
          />
        )}
        {showModal === 3 && (
          <ModalHorario
            setReserva={setReserva}
            reserva={reserva}
            handleModalOpen={handleModalOpen}
            closeModal={closeModal}
          />
        )}
        {/* {showModal === 4 && (
            <Busqueda closeModal={closeModal}  setAddress={setAddress}/>
        )} */}
      </div>
      <Footer/>
    </>
  );
};

export default Home;
