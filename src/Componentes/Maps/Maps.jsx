import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Maps.scss'


export const Maps = () => {



    const containerStyle = {
        height: '100vh'
       };
       
       const mapOptions = {
        center: {
          lat: 40.4165000,
          lng: -3.7025600
        },
        zoom:12
      };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:'AIzaSyCgfGA8mPkcAllZbuLJodNhVE2EY8pirYI'
       })
      
       const [map, setMap] = React.useState(null)
      
       const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(mapOptions.center);
        map.fitBounds(bounds);
        setMap(map)
       }, [])
      
       const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
       }, [])

  return (
    <div className='map'>
    <input type="text" placeholder="Busca una zona" className='map_input'></input>
    {isLoaded ? (
        <GoogleMap
         mapContainerStyle={containerStyle}
         center={mapOptions.center}
         zoom={mapOptions.zoom}
         onLoad={onLoad}
         onUnmount={onUnmount}
        >
         <></>
        </GoogleMap>
       ) : <></>}
    </div>
  )
}
