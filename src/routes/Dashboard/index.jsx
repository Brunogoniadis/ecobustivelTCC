import { MainWindow } from "./styles"
import Slider from 'react-input-slider';
import { useState } from "react";

const Dashboard = () => {

    const [state, setState] = useState({ x: 1});


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
              track:{backgroundColor: "var(--color-text)"},
              active: {backgroundColor: 'var(--color-border)' },
            }}
          axis="x" x={state.x} onChange={({ x }) => setState(state => ({ ...state, x }))} xmax={10} />

          <p>{state.x} km</p>
        </div>

        
      </MainWindow>
    );
  };
  
export default Dashboard;