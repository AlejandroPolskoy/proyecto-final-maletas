import React from 'react';
import './Home.scss';
import Novedades from '../../Componentes/Novedades/Novedades';
import Experiencias from '../../Componentes/Experiencias/Experiencias';
// import Footer from "../../Componentes/Footer/Footer";

const Home = () => {
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
                <input className='search-input' type='text' placeholder='Depósito'/>
            </div>
            <div className='form-search_div'>
                <img className='search-img' src='/assets/calendario@2x.png' alt='calendar'/>
                <input className='search-input' type='text' placeholder='Retirada'/>
            </div>
            <div className='form-search_div'>
                <img className='search-img' src='/assets/maletita@2x.png' alt='calendar'/>
                <input className='search-input' type='number' placeholder='Nº de piezas'/>
            </div>
            
            <button className='search-button'> Buscar </button>
        </form>
        </div>
        <Novedades />
        <Experiencias />
        {/* <Footer/> */}
    </>
  )
}

export default Home;
