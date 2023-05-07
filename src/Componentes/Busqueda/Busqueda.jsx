import React from 'react';
import './Busqueda.scss';

const Busqueda = ({closeModal, setAddress}) => {
  return (
    <div className='content'>
        <img className='back-arrow' onClick={closeModal} src='/assets/icons8Back100Copy@2x.png' alt='back' />
        
        <div className='search-div'>
            <img className='aspa' src='/assets/aspa@2x.png' alt='aspa' />
            <input className="input" type="text" placeholder="¿Dónde te encuentras? Madrid, Barcelona…"/>
        </div>

        <div className='history' >
            <div className='history-one'>
                <img src='/assets/brujula@2x.png' alt='brujula' />
                <p> Utilizar mi ubicación actual </p>
            </div>
            <div className='history-two'>
                <img src='/assets/reloj@2x.png' alt='reloj' />
                <p> Pacífico, Madrid </p>
            </div>
            <div className='history-two'>
                <img src='/assets/reloj@2x.png' alt='reloj' />
                <p> Alicante, España</p>
            </div>
        </div>
        <div className='next'>
            <img src='/assets/botonContinuar@2x.png' alt='next' />
        </div>
    </div>
  )
}

export default Busqueda
