import React from 'react';
import { MarkerF } from '@react-google-maps/api';

const Markers = ({ locations }) => {
  return (
    <>
      {locations.map((location, index) => (
        <MarkerF key={index} position={location} />
      ))}
    </>
  );
};

export default Markers;
