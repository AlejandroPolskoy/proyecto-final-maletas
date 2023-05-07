import React, { useState } from 'react';
import './Home.scss';
import Novedades from '../../Componentes/Novedades/Novedades';
import Experiencias from '../../Componentes/Experiencias/Experiencias';
import Calendario from '../../Componentes/Calendario/Calendario';
import CalendarioEnd from '../../Componentes/Calendario/CalendarioEnd';
import ModalHorario from '../../Componentes/ModalHorario/ModalHorario';
// import Footer from "../../Componentes/Footer/Footer";

const Home = () => {

    //Datos de calendario
    const [startDate, setStartDate] = useState(null);       
    const [endDate, setEndDate] = useState(null);       
    const [showModal, setShowModal] = useState(0);

    //Datos de horario
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    //Datos de numero de piezas
    const [amountPack, setAmountPack] = useState(0);

    //Funciones
    const closeModal = () => {
        setShowModal(0);
    }


  return (
    <>
        <div className='search-section'>
        <h1 className='search-title'> Encuentra tu guardián </h1>

        <form className='form-search'>
            <div className='form-search_big'>
                <img className='search-bimg' src='/assets/lupa@2x.png' alt='lupa'/>
                <input className='search-big' type='text' placeholder='¿Dónde te encuentras? Madrid, Barcelona…'/>
            </div>
            <div className='form-search_div'>
                <img className='search-img' src='/assets/calendario@2x.png' alt='calendar'/>
                <input onClick={()=> setShowModal(showModal + 1)} className='search-input' type='text' placeholder='Depósito'  defaultValue={startDate ? startDate : ''}/>
            </div>
            <div className='form-search_div'>
                <img className='search-img' src='/assets/calendario@2x.png' alt='calendar'/>
                <input onClick={()=> setShowModal(showModal + 2)} className='search-input' type='text' placeholder='Retirada' defaultValue={endDate ? endDate : ''}/>
            </div>
            <div className='form-search_div'>
                <img className='search-img' src='/assets/maletita@2x.png' alt='calendar'/>
                <input className='search-input' type='number' placeholder='Nº de piezas' value={amountPack !== 0 ? amountPack : ''}/>
            </div>
            
            <button className='search-button'> Buscar </button>
        </form>
        <Novedades />
        <Experiencias />
        {showModal === 1 && (
            <Calendario setStartDate={setStartDate} closeCal={closeModal} />
        )}
        {showModal === 2 && (
            <CalendarioEnd setShowModal={setShowModal} setEndDate={setEndDate} setStartTime={setStartTime} setEndTime={setEndTime} setAmountPack={setAmountPack}/>
        )}
        {showModal === 3 && (
            <ModalHorario startTime={startTime} endTime={endTime}  amountPack={amountPack} setShowModal={setShowModal} setStartTime={setStartTime} setEndTime={setEndTime} setAmountPack={setAmountPack} closeModal={closeModal}/>
        )}
        </div>
        {/* <Footer/> */}
    </>
  )
}

export default Home;
