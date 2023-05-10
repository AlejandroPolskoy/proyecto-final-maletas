import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import './CalendarioEnd.scss';
import Footer from '../Footer/Footer';

const CalendarioEnd = ({setReserva, reserva, setShowModal}) => {

    const months = Array.from({ length: 12 }, (_, i) => new Date(new Date().getFullYear(), i, 1));


    const selected = (e) => {
        const selectedTile = e.currentTarget;
        if (selectedTile) {
            // Quita la clase 'selected' de la fecha previamente seleccionada
          const prevSelectedTile = document.querySelector('.react-calendar__tile.selected');
          if (prevSelectedTile) {
            prevSelectedTile.classList.remove('selected');
          }
          // Agrega la clase 'selected'a la fecha seleccionada
          selectedTile.classList.add('selected');
        }
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB'); // Cambia el formato de la fecha
    };


    useEffect(() => {
        const tiles = document.querySelectorAll('.react-calendar__tile');
        tiles.forEach(tile => {
            tile.addEventListener('click', selected);
        });
        return () => {
            tiles.forEach(tile => {
                tile.removeEventListener('click', selected);
            });
        };
    }, []);

  return (
    <div className='content'>
        <img className='cal-img' onClick={()=> setShowModal(0)} src='/assets/icons8Back100Copy@2x.png' alt='back' />
        <div className='calendar-container'>
            {months.map((month) => (
                <Calendar
                    key={`${month.getMonth()}-${month.getFullYear()}`}
                    onChange={(date) => setReserva({...reserva, date_out: formatDate(date)})}
                    value={month}
                    maxDetail="month"
                    showNeighboringMonth={false}
                    onClickDay={(e)=> selected(e)}
                />
            ))}
        </div>
        <div className='btn-div'>
            <button onClick={()=> setShowModal(3)} className='calendar_btn'> Continuar </button> 
        </div>
        <Footer />
    </div>
  )
}

export default CalendarioEnd;
