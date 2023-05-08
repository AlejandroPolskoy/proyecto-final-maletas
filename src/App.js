import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Bienvenida from "./Pages/bienvenida/Bienvenida";
import Usuario from "./Pages/Usuarios/Usuario";
import Login from "./Pages/Login/Login";
import Registrar from "./Pages/Login/Registrar";
import Tarifas from "./Pages/Home/Tarifas";
import Home from "./Pages/Home/Home";
import Descripcion from "./Pages/Anuncios/Descripcion";
import HomeGuardian from "./Pages/Anuncios/HomeGuardian";
import HacerseGuardian from "./Pages/Anuncios/HacerseGuardian";
import { Maps } from "./Componentes/Maps/Maps";
import Logout from "./Pages/Login/Logout";
import Chat from "./Pages/Chat/Chat";
import { useState } from "react";
import { VariablesContext } from "./Shared/VariablesContext";
import UserFile from "./Pages/UserFile/UserFile";
import MiPerfil from "./Pages/Usuarios/MiPerfil";
import Reserva from "./Pages/Reserva/Reserva";
import { api } from "./Componentes/shared";


function App() {
  const [address, setAddress] = useState("");

  return (
    <VariablesContext.Provider value={{ address, setAddress }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bienvenida" element={<Bienvenida />} />
            <Route path="/usuario/:id" element={<Usuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Registrar />} />
            <Route path="/tarifas" element={<Tarifas />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/hacerse-guardian" element={<HacerseGuardian/>} />
            <Route path="/user-file" element={<UserFile />} />
            <Route path="/miperfil" element={<MiPerfil />} />
            <Route path="/reserva" element={<Reserva/>}/>
            <Route path="/chat" element={<Chat/>}/>
          </Routes>
        </div>
      </Router>
    </VariablesContext.Provider>
  );
}

export default App;