import React, { Component } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "370px",
  borderRadius: "20px",
};

const center = {
  lat: -1.9511665, // default latitude
  lng: 30.0553798, // default longitude
};
function MapContainer() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDn5zUorxGr8uzdYi2QdumT41irhQZpopU",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={{ lat: -1.935114, lng: 30.082111 }} />
      </GoogleMap>
    </div>
  );
}
export default MapContainer;
