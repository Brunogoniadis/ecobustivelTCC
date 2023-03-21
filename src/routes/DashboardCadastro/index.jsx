import { MainWindow } from "./styles";
import Slider from "react-input-slider";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const DashboardCadastro = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [zoom, setZoom] = useState(13);
  const [marker, setMarker] = useState({ lat: null, lng: null });
  const [visibleInput, setInvisibleInput] = useState(false);

  const [gasStations, setGasStations] = useState([
    { name: " ", location: { lat: 0, lng: 0 } ,gasolinaValue : 0, alcoolValue: 0, gnvValue: 0},
  ]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDATcqFrpKhpxJxugCvy0Q0c6R3PwZ43Io"
  });

  useEffect(()=>{
    console.log("teste", marker)
  }, [marker])  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleMapClick = (event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setInvisibleInput(true);
    
  };

  const handleMarkerDragEnd = (event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const options = {
    mapTypeControl: false,
    mapTypeId: "roadmap",
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
  };

  return (
    <MainWindow>
      <div className="Topbar">
        <p>ecobustivelTCC</p>
      </div>

      <div className="TitleText">
        <h2>Cadastrar Posto</h2>
        <p>Os postos de gasolina serão mostrados conforme o limite escolhido</p>

        <div className="InputContainer">
          <input className="stationName" placeholder="Nome do posto"></input>
          <input className="price" placeholder="Gasol"></input>
          <input className="price" placeholder="Alcool"></input>
          <input className="price" placeholder="GnV"></input>
        </div>
        <div className="ButtonContainer">
          <button className="saveStation">Cadastrar</button>
        </div>

        <div className="SliderBackground"></div>

        <div className="MapDiv">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{ lat: location.lat, lng: location.lng }}
              options={options}
              zoom={zoom}
              onClick={handleMapClick}
            >
              {marker && (
                <Marker
                  position={marker}
                  draggable={true}
                  onDragEnd={handleMarkerDragEnd}
                />
              )}
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </MainWindow>
  );
};

export default DashboardCadastro;