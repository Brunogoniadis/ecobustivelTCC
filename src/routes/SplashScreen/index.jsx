import {MainWindow} from "./styles"
import mainicon from "../../assets/mainicon.svg"

const SplashScreen = () => {
    return (
      <MainWindow>
        <img src={mainicon}></img>

        <div className="textContainer">        
          <h1>Eco-Bustivel</h1>
          <h2>Combustivel econômico para seu</h2>
          <h2>veículo</h2></div>

      </MainWindow>
    );
  };
  
export default SplashScreen;