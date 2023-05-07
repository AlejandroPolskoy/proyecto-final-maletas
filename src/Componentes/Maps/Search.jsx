import { useState } from "react";

export const Search = ({ searchBox }) => {
  const [places, setPlaces] = useState([]);

  const handleOnPlacesChanged = () => {
    const newPlaces = searchBox.getPlaces();
    setPlaces(newPlaces);
  };

  return (
    <div className="search-container">
      <input type="text" placeholder="Search places..." className="map_input"/>
      <button onClick={handleOnPlacesChanged}>Search</button>
    </div>
  );
};
