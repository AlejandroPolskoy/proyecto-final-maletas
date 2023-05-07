import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import './CalendarioEnd.scss';

const CalendarioEnd = ({setEndDate, setShowModal}) => {

    const months = Array.from({ length: 12 }, (_, i) => new Date(new Date().getFullYear(), i, 1));


    const selected = (e) => {
        const selectedTile = e.currentTarget;
        if (selectedTile) {
          // Remove 'selected' class from any previously selected tile
          const prevSelectedTile = document.querySelector('.react-calendar__tile.selected');
          if (prevSelectedTile) {
            prevSelectedTile.classList.remove('selected');
          }
          // Add 'selected' class to the clicked tile
          selectedTile.classList.add('selected');
        }
    }

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
        <img onClick={()=> setShowModal(0)} src='/assets/icons8Back100Copy@2x.png' alt='back' />
        <div className='calendar-container'>
            {/* <Calendar onChange={setEndDate} value={new Date()} showDoubleView={true}/>  */}
            {months.map((month) => (
                <Calendar
                    key={`${month.getMonth()}-${month.getFullYear()}`}
                    onChange={setEndDate}
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
    </div>
  )
}

export default CalendarioEnd;
