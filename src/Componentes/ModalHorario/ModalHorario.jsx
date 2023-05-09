import React, { useEffect } from 'react';
import './ModalHorario.scss';
import Footer from '../Footer/Footer';
const ModalHorario = ({setReserva, reserva, handleModalOpen}) => {

    const saveData = (event, key) => {
        setReserva({...reserva, [key] : event.target.value});
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


  return (
    <div className='modal-time'>

        <img className='back-arrow' onClick={() => handleModalOpen(2)} src='/assets/icons8Back100Copy@2x.png' alt='back' />

        <div className='modal-time_container'>
            <div className='modal-time_container_inner'>
                <h2 className='modal-time_container_inner__title'>Depósito</h2>
                <input onChange={(e)=>saveData(e, "startTime")} className='orange' type='time'/>
            </div>
            <div className='modal-time_container_inner'>
                <h2 className='modal-time_container_inner__title'>Retirada</h2>
                <input onChange={(e)=>saveData(e, "endTime")} className='blue' type='time' />
            </div>
        </div>
        <div className='modal-suitcase'>
            <h2 className='modal-suitcase_title'> Número de equipaje </h2>
            <input onChange={(e)=>saveData(e, "amountPack")} type='number' />
        </div>
        <div className='arrow-continue' >
            <img onClick={() => handleModalOpen(0)} src='/assets/botonContinuar@2x.png' alt='continue'/>
        </div>

        <Footer />
        
    </div>
  )
}

export default ModalHorario
