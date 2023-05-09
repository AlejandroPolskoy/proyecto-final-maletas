import { useState } from "react";
import './Maps.scss'

export const Search = ({ onPlacesChanged, setReserva, reserva }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onPlacesChanged();
  };

  const handleInputChange = (event) => {
    setReserva({...reserva, address: event.target.value})
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      onPlacesChanged();
      setReserva({...reserva, address: event.target.value})
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search places..."
        className="search"
        value={reserva.address}
        onChange={handleInputChange}
        onKeyDown={(e)=> handleInputKeyPress(e)}
      />
    </div>
  );
};
