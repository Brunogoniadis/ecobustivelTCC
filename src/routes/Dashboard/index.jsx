import { MainWindow } from "./styles"
import Slider from 'react-input-slider';
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Dashboard = () => {


  


  const [state, setState] = useState({ x: 1 });
  const [location, setLocation] = useState({ lat: null, lng: null });


  const [gasStations, setGasStations] = useState([
    { name: "Posto Planetário ", location: { lat: -22.8429, lng: -43.0744 } ,gasolinaValue :22.90, alcoolValue: 14.12, gnvValue: 5.43, id:1},
    { name: "Posto Barreira's ", location: { lat: -22.8382, lng: -43.0672 } ,gasolinaValue :21.67, alcoolValue: 13.23, gnvValue: 4.34, id:2},
    { name: "Posto Ipiranga ", location:   { lat: -22.8351, lng: -43.0607 } ,gasolinaValue :20.76, alcoolValue: 13.45, gnvValue: 4.12, id:3},
  ]);
  const [zoom, setZoom] = useState(13);

  function handleZoomChange({ x }) {
    setZoom(13 + x); // Adicione o valor do slider ao zoom atual (13)
  }

  function renderGasStations() {
    const renderedGasStations = [];
    for (let i = 0; i < gasStations.length; i++) {
      const gasStation = gasStations[i];
      renderedGasStations.push(
        <div key={gasStation.id} className="TableInfo">
          <p className="gasStation">{gasStation.name}</p>
          <p className="gasolinaValue">{gasStation.gasolinaValue}</p>
          <p className="alcoolValue">{gasStation.alcoolValue}</p>
          <p className="gnvValue">{gasStation.gnvValue}</p>
        </div>
      );
    }
    return renderedGasStations;
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDATcqFrpKhpxJxugCvy0Q0c6R3PwZ43Io"
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
    fullscreenControl: false,
    zoomControl: false

  };
  return (
    <MainWindow>
      <div className="Topbar">
        <p>ecobustivelTCC</p>
      </div>

      <div className="TitleText">

        <h2>Selecionar posto</h2>
        <p>Os postos de gasolina seram mostrados conforme o limite escolhido</p>

        <div className="SliderBackground">
        <Slider
          styles={{
            track: { backgroundColor: "var(--color-text)" },
            active: { backgroundColor: 'var(--color-border)' },
          }}
          axis="x"
          x={state.x}
          onChange={({ x }) => {
            setState(state => ({ ...state, x }));
            handleZoomChange({ x });
          }}
          xmax={10}
        />
        <p>{state.x} km</p>
      </div>



        <div className="MapDiv">

          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: location.lat, lng: location.lng }}
              options={options}
              zoom={zoom}

            >
              {gasStations.map((gasStation, index) => (
                <Marker
                
                  key={index}
                  position={gasStation.location}
                  label={{
                    text: gasStation.name,
                    fontWeight: "bold",
                  }}
                />
              ))}
            </GoogleMap>
          ) : <></>}
        </div>

        {renderGasStations()}

      </div>

    </MainWindow>
  );
};

export default Dashboard;