import { useState } from "react";
import './Maps.scss'
import { MarkerF } from "@react-google-maps/api";

export const Search = ({ onPlacesChanged, setAddress }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onPlacesChanged();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      onPlacesChanged();
      setAddress(event.target.value)
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search places..."
        className="search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={(e)=> handleInputKeyPress(e)}
      />
    </div>
  );
};
