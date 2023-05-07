import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Maps.scss'
import Footer from "../Footer/Footer";


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
      <>
        <div className="google-container">
          <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
          </GoogleMap>
        </div>
        <Footer />
      </>
    );
}
