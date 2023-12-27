import React from "react";
import useCurrentLocation from "./useCurrentLocation";

const CurrentLocation = () => {
  const { location, error, loading, getCurrentLocation } = useCurrentLocation();

  return (
    <div>
      {loading && <p>Sto cercando la tua posizione...</p>}
      {error && <p>Errore: {error}</p>}
      {location && (
        <p>
          La tua posizione attuale è: {location.latitude}, {location.longitude}
        </p>
      )}
      <button onClick={getCurrentLocation}>Ottieni posizione</button>
    </div>
  );
};

export default CurrentLocation;