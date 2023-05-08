import React from 'react';
import './Busqueda.scss';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Search } from '../Maps/Search';

const Busqueda = ({closeModal, setAddress}) => {

    // const getAddress = (e) => {

    //     setAddress(e.target.value)

    // }

  return (
    <>
    <div className='content'>
        <img className='back-arrow' onClick={closeModal} src='/assets/icons8Back100Copy@2x.png' alt='back' />
        
        <div className='search-div'>
            <img className='aspa' src='/assets/aspa@2x.png' alt='aspa' />
            <Search />
        </div>

        <div className='history' >
            <div className='history-one'>
                <img className='history-img' src='/assets/brujula@2x.png' alt='brujula' />
                <p> Utilizar mi ubicación actual </p>
            </div>
            <div className='history-two'>
                <img className='history-img' src='/assets/reloj@2x.png' alt='reloj' />
                <p> Pacífico, Madrid </p>
            </div>
            <div className='history-two'>
                <img className='history-img' src='/assets/reloj@2x.png' alt='reloj' />
                <p> Alicante, España</p>
            </div>
        </div>
        <div className='next'>
            <NavLink to="/maps"><img className='arrow-img' src='/assets/botonContinuar@2x.png' alt='next' /></NavLink>
        </div>
        <Footer />
    </div>
    
    </>
  )
}

export default Busqueda
