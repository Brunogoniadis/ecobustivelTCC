import { MainWindow } from "./styles"
import mainicon from "../../assets/mainicon.svg"


const Login = () => {
    return (
      <MainWindow>

        <img src={mainicon}></img>

        <div className="inputContainer">

          <input placeholder="Usuário" ></input>
          <input  placeholder="Senha"></input>

          <button>Login</button>
        </div>
      </MainWindow>
    )
  };
  
export default Login;