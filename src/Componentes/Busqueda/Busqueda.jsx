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
    </div>
  )
}

export default Busqueda
