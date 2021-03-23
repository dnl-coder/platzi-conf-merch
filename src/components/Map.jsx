import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = ({ data }) => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyCqMKuptPMNR8q03CMhYdeEi8z76ygo_ZM"
  });

  const mapStyles={
      height:"50vh",
      with:"100%",
  };

  const defaultCenter={
    lat: data.lat,
    lng:data.lng
  };

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onLoad = useCallback(() => () => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
  ) : <></>
}

export default Map;