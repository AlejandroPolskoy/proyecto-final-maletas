import './Maps.scss'


export const Search = ({ onPlacesChanged, setReserva, reserva }) => {

  const handleInputChange = (event) => {
    setReserva({...reserva, location: event.target.value})
  };

  const handleSearch = (event) => {

    const input = event.target.offsetParent.querySelector('input[type="text"]');
    const inputValue = input.value;

    setReserva({...reserva, location: inputValue})
    onPlacesChanged();
  };

  return (
    <>
    <div className="search-container">
      <input
        type="text"
        placeholder="¿Dónde te encuentras? Madrid, Barcelona…"
        className="search"
        value={reserva.location}
        onChangeCapture={handleInputChange}
        onBlur={handleInputChange}
      />
      <img  onClick={(e)=> handleSearch(e)} className='arrow-search' src="/assets/right-arrow.png" alt="search" />
    </div>
    </>
  );
};
