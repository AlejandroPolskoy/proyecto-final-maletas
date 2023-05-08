import { useState } from "react";
import './Maps.scss'

export const Search = ({ onPlacesChanged }) => {
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
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
};
