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
import { useEffect, useState } from "react";
import { VariablesContext } from "./Shared/VariablesContext";
import DetallesReserva from "./Pages/Reserva/DetallesReserva";
import UserFile from "./Pages/UserFile/UserFile";
import MiPerfil from "./Pages/Usuarios/MiPerfil";
import Reserva from "./Pages/Reserva/Reserva";
import { api } from "./Componentes/shared";
import ListaAnuncios from "./Pages/Anuncios/ListaAnuncios";
import ChatList from "./Pages/Chat/ChatList";


function App() {
  const [reserva, setReserva] = useState({
    time_in: "00:00",
    time_out: "00:00",
    cuantity: 1,
    date_in: "",
    date_out: "",
    location: "",
    locationString: ""
  });
  const [messages, setMessages] = useState([]);
  const [isNewMessages, setNotification] = useState(false);

  useEffect(()=> {
    setNotification( messages.length > 0 ? true : false );
  }, [messages]);

  return (
    <VariablesContext.Provider value={{ reserva, setReserva, messages, setMessages, isNewMessages, setNotification }}>
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
            <Route path="/homeguardian" element={<HomeGuardian/>} />
            <Route path="/detallesreserva" element={<DetallesReserva/>} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/hacerse-guardian" element={<HacerseGuardian/>} />
            <Route path="/user-file/:id" element={<UserFile />} />
            <Route path="/editar-perfil" element={<MiPerfil />} />
            <Route path="/reserva" element={<Reserva/>}/>
            <Route path="/chat/:id" element={<Chat/>}/>
            <Route path="/chat" element={<ChatList/>}/>
            <Route path="/mi-perfil" element={<Usuario />} />
            <Route path="/lista-anuncios" element={<ListaAnuncios />} />
          </Routes>
        </div>
      </Router>
    </VariablesContext.Provider>
  );
}

export default App;