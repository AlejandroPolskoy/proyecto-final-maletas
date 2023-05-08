import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Bienvenida from "./Pages/bienvenida/Bienvenida";
import Usuario from "./Pages/Usuarios/Usuario";
import Login from "./Pages/Login/Login";
import Registrar from "./Pages/Login/Registrar";
import Tarifas from "./Pages/Home/Tarifas";
import Home from "./Pages/Home/Home";
import { Maps } from "./Componentes/Maps/Maps";
import Logout from "./Pages/Login/Logout";
import Chat from "./Pages/Chat/Chat";

const urls = ["https://maleteo-node.vercel.app", "http://localhost:8888"];
export const api = urls[0];

function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bienvenida" element={<Bienvenida/>} />
        <Route path="/usuario/:id" element={<Usuario/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<Registrar/>} />
        <Route path="/tarifas" element={<Tarifas/>} />
        <Route path="/maps" element={<Maps/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
      
    </div>
    
    </Router>
  );
}

export default App;
