import React, { useState, useMemo, useRef, useContext } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { StandaloneSearchBox } from "@react-google-maps/api";
import "./Maps.scss";
import { Search } from "./Search";
import Footer from "../Footer/Footer";
import { VariablesContext } from "../../Shared/VariablesContext";

const libraries = ["places"];

export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAEku8MYSQoLRi2aIAEyL-Qeu9U2xP_pJU",
    libraries,
  });

  if (!isLoaded) return <div>Loading... </div>;
  return <Map />;
};

function Map() {
  const center = useMemo(() => ({ lat: 40.4165, lng: -3.70256 }), []);
  const [searchBox, setSearchBox] = useState(center);
  const [map, setMap] = useState(null);
  const mapRef = useRef();
  const {setReserva, reserva} = useContext(VariablesContext);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleOnPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length === 0) return;
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) return;
      bounds.extend(place.geometry.location);
    });
    map.fitBounds(bounds);
  };

  return (
    <>
      <div className="google-container">
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="map-container"
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF position={center} />
          <StandaloneSearchBox onLoad={setSearchBox}>
            <Search onPlacesChanged={handleOnPlacesChanged} setReserva={setReserva} reserva={reserva}/>
          </StandaloneSearchBox>
        </GoogleMap>
      </div>
      <Footer />
    </>
  );
}

export default Map;
