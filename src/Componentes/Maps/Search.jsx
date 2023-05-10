import './Maps.scss'


export const Search = ({ onPlacesChanged, setReserva, reserva }) => {

  const handleInputChange = (event) => {
    setReserva({...reserva, address: event.target.value})
    console.log("antes:", reserva.address)
  };

  const handleSearch = (event) => {

    const input = event.target.offsetParent.querySelector('input[type="text"]');
    const inputValue = input.value;

    setReserva({...reserva, address: inputValue})
    onPlacesChanged();
    console.log("despues:", reserva.address);
    
  };

  return (
    <>
    <div className="search-container">
      <input
        type="text"
        placeholder="¿Dónde te encuentras? Madrid, Barcelona…"
        className="search"
        value={reserva.address}
        onChangeCapture={handleInputChange}
        onBlur={handleInputChange}
      />
      <img  onClick={(e)=> handleSearch(e)} className='arrow-search' src="/assets/right-arrow.png" alt="search" />
    </div>
    </>
  );
};
