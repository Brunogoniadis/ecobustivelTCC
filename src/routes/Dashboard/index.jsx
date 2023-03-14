import { MainWindow } from "./styles"
import Slider from 'react-input-slider';
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Dashboard = () => {

  const [state, setState] = useState({ x: 1 });

  const [location, setLocation] = useState({ lat: null, lng: null });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "NULL"
  });


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  const options = {
    mapTypeControl: false,
    mapTypeId: 'roadmap',
    streetViewControl: false,
    fullscreenControl: false
  };
  return (
    <MainWindow>
      <div className="Topbar">
        <p>ecobustivelTCC</p>
      </div>

      <div className="TitleText">

        <h2>Selecionar posto</h2>
        <p>Os postos de gasolina seram mostrados conforme o limite escolhido</p>

        <Slider
          styles={{
            track: { backgroundColor: "var(--color-text)" },
            active: { backgroundColor: 'var(--color-border)' },
          }}
          axis="x" x={state.x} onChange={({ x }) => setState(state => ({ ...state, x }))} xmax={10} 
        />

        <p>{state.x} km</p>

        <div className="MapDiv">

          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: location.lat, lng: location.lng, }}
              options={options}
              zoom={16}
            >
              <></>
            </GoogleMap>
          ) : <></>}
        </div>
      </div>
    </MainWindow>
  );
};

export default Dashboard;