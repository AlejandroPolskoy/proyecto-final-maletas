import React from 'react';
import lupa from '../../assets/lupa@2x.png'
import calendar from '../../assets/calendario@2x.png'
import suitcase from '../../assets/maletita@2x.png'
import './Home.scss';

const Home = () => {
  return (
    <div className='search-section'>
      <h1 className='search-title'> Encuentra tu guardián </h1>

      <form className='form-search'>
        <div className='form-search_big'>
            <img className='search-bimg' src={lupa} alt='lupa'/>
            <input className='search-big' type='text' placeholder='¿Dónde te encuentras? Madrid, Barcelona…'/>
        </div>
        <div className='form-search_div'>
            <img className='search-img' src={calendar} alt='calendar'/>
            <input className='search-input' type='text' placeholder='Depósito'/>
        </div>
        <div className='form-search_div'>
            <img className='search-img' src={calendar} alt='calendar'/>
            <input className='search-input' type='text' placeholder='Retirada'/>
        </div>
        <div className='form-search_div'>
            <img className='search-img' src={suitcase} alt='calendar'/>
            <input className='search-input' type='number' placeholder='Nº de piezas'/>
        </div>
        
        <button className='search-button'> Buscar </button>
      </form>
    </div>
  )
}

export default Home;
