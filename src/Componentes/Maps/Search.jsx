import { useState } from "react";
import './Maps.scss'

export const Search = ({ onPlacesChanged, setReserva, reserva }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onPlacesChanged();
  };

  const handleInputChange = (event) => {
    setReserva({...reserva, location: event.target.value})
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      onPlacesChanged();
      handleInputChange(event);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search places..."
        className="search"
        value={reserva.location}
        onChange={handleInputChange}
        onKeyDown={(e)=> handleInputKeyPress(e)}
      />
    </div>
  );
};
