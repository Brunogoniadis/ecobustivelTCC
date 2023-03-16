import { MainWindow } from "./styles"
import Slider from 'react-input-slider';
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const DashboardCadastro = () => {

  const [state, setState] = useState({ x: 1 });



  const [location, setLocation] = useState({ lat: null, lng: null });

  const [zoom, setZoom] = useState(13);



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
        <h2>Cadastrar Posto</h2>
        <p>Os postos de gasolina seram mostrados conforme o limite escolhido</p>

        <div className="SliderBackground">
      </div>

        <div className="MapDiv">

          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: location.lat, lng: location.lng }}
              options={options}
              zoom={13}
            >

            </GoogleMap>
          ) : <></>}
        </div>
      </div>

    </MainWindow>
  );
};

export default DashboardCadastro;