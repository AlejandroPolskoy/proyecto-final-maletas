import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './Maps.scss'


export const Maps = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEku8MYSQoLRi2aIAEyL-Qeu9U2xP_pJU",
    });

    if(!isLoaded) return <div>Loading... </div>
  return <Map/>
}

function Map(){
    const center = useMemo(() => ({ lat: 40.4165, lng: -3.70256 }), []);
    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
}
