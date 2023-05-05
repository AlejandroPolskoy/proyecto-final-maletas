import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Bienvenida from "./Pages/bienvenida/Bienvenida";
import Usuario from "./Pages/Usuarios/Usuario";
import Login from "./Pages/Login/Login";
import Registrar from "./Pages/Login/Registrar";
import Tarifas from "./Pages/Home/Tarifas";
import Home from "./Pages/Home/Home";
import Anuncios from "./Pages/Anuncios/Anuncios";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/bienvenida" element={<Bienvenida/>} />
        <Route path="/usuario/:id" element={<Usuario/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registrar/>} />
        <Route path="/tarifas" element={<Tarifas/>} />
        <Route path="/anuncios" element={<Anuncios/>} />

      </Routes>
      
    </div>
    
    </Router>
  );
}

export default App;
