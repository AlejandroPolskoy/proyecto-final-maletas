import React from "react";
import { useState } from "react";
import flecha from "../../assets/circulo_flecha.png";
import continuar from "../../assets/continuar.png";
import botonPublicar from "../../assets/botonPublicar.png";
import botonx from "../../assets/x.png";
import "./HacerseGuardian.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Ubicacion from "./Ubicacion";
import Fotos from "./Fotos";
import Titulo from "./Titulo";
import Disponibilidad from "./Disponibilidad";
import Servicios from "./Servicios";
import Descripcion from "./Descripcion";
import Footer from "../../Componentes/Footer/Footer";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { api } from '../../Componentes/shared';

export default function HacerseGuardian() {

  const navigate = useNavigate();
  if(!localStorage.getItem("user")) navigate("/bienvenida");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [paginas, setPaginas] = useState(0);

  const [propiedad, setPropiedad] = useState("");

  const [direccion, setDireccion] = useState("");

  const [titulo, setTitulo] = useState("");

  const [servicio, setServicio] = useState("");

  const handleFlechaClick = () => {
    setPaginas(paginas + 1);
  };

  const onChangePropiedad = (value) => {
    setDireccion(value);
  };

  const onChangeDireccion = (value) => {
    setDireccion(value);
  };

  const onChangeFoto = (files) => {
    setSelectedFileName(files);
  };

  const onChangeTitulo = (value) => {
    setTitulo(value);
  };

  const onChangeServicio = (value) => {
    setServicio(value);
  };

  const handleVolverClick = () => {
    setPaginas(paginas - 6);
  };

  const handleBack = () => {
    setPaginas(paginas - 1);
  };

  const publicarAnuncio = () => {
    const datosAnuncio = new FormData();
    datosAnuncio.append("coords", direccion);
    datosAnuncio.append("title", titulo);
    datosAnuncio.append("owner", userInfo._id);
    datosAnuncio.append("type", selectedOption);
    datosAnuncio.append("propertyType", selectedOption02);
    datosAnuncio.append("image", selectedFileName);
    datosAnuncio.append("capacity", servicio);
    datosAnuncio.append("availability", selectedDisponibilidad);
    datosAnuncio.append("availability2", selectedDisponibilidad02);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post( api + "/anuncios/setLocation", datosAnuncio, config).then( res => {
      if(res.status == 201) {
        navigate("/homeguardian");
      } else {
        console.log( "error:", res );
      }
  })
  };

  const [selectedOption, setSelectedOption] = useState("");

  const [selectedOption02, setSelectedOption02] = useState("");

  const [selectedFileName, setSelectedFileName] = useState("");

  const [selectedDisponibilidad, setSelectedDisponibilidad] = useState("");

  const [selectedDisponibilidad02, setSelectedDisponibilidad02] = useState("");

  return (
    <div className='guardian-container'>
      {paginas !== 0 && paginas !== 6 && (
        <div className="arrow-continue">
          <img
            onClick={handleFlechaClick}
            className=""
            src={flecha}
            alt="flecha"
          ></img>
        </div>
      )}

      {paginas === 0 && (
        <div>
          <div className="configuracionContainer">
            <p className="configuracionTitulo">
              Configura tu espacio en muy pocos pasos
            </p>
            <NavLink className='cross-link' to='/mi-perfil'><img className="botonx" src={botonx} alt="continuar" /></NavLink>
          </div>

          <div className="items__container">
            <div>
              <div className="describe">
                <p className="categoria--negrita">Describe tu espacio</p>
                <img
                  onClick={handleFlechaClick}
                  className="continuar"
                  src={continuar}
                  alt="continuar"
                ></img>
              </div>
              <div className="describe__options">
                <input
                  type="text"
                  id="input00"
                  className="inputGuardian"
                  defaultValue={selectedOption}
                />
                <input
                  type="text"
                  id="input001"
                  className="inputGuardian"
                  defaultValue={selectedOption02}
                />
              </div>
            </div>

            <div>
              <p className="categoria">Ubicación </p>
              <input
                type="text"
                id="input01"
                className="inputGuardian"
                defaultValue={direccion}
              />
            </div>
            <div>
              <p className="categoria">Fotos</p>
              <input
                type="text"
                id="input02"
                className="inputGuardian"
                defaultValue={selectedFileName ? selectedFileName.name : ""}
              />
            </div>
            <div>
              <p className="categoria">Título </p>
              <input
                type="text"
                id="input03"
                className="inputGuardian"
                defaultValue={titulo}
              />
            </div>
            <div>
              <div>
                <p className="categoria">Disponibilidad y horarios</p>
              </div>
              <div className="describe__options">
                <input
                  type="text"
                  id="input00"
                  className="inputGuardian"
                  defaultValue={selectedDisponibilidad}
                />
                <input
                  type="text"
                  id="input001"
                  className="inputGuardian"
                  defaultValue={selectedDisponibilidad02}
                />
              </div>
            </div>
            <div>
              <p className="categoria">Servicios</p>
              <input
                type="text"
                id="input03"
                className="inputGuardian"
                defaultValue={servicio}
              />
            </div>
          </div>

          <div className="botonPublicar__container">
            <img
              onClick={publicarAnuncio}
              className="botonPublicar"
              src={botonPublicar}
              alt="continuar"
            ></img>
          </div>
        </div>

      )}

      {paginas == 1 && (
        <Descripcion
          onChangePropiedad={onChangePropiedad}
          propiedad={propiedad}
          onBackClick={handleBack}
          setSelectedOption={setSelectedOption}
          setSelectedOption02={setSelectedOption02}
          selectedOption={selectedOption}
          selectedOption02={selectedOption02}
        />
      )}

      {paginas == 2 && (
        <Ubicacion
          onChangeDireccion={onChangeDireccion}
          direccion={direccion}
          onBackClick={handleBack}
        ></Ubicacion>
      )}

      {paginas == 3 && (
        <Fotos
          onChangeFotos={onChangeFoto}
          onBackClick={handleBack}
          selectedFileName={selectedFileName}
          setSelectedFileName={setSelectedFileName}
        />
      )}

      {paginas == 4 && (
        <Titulo
          onChangeTitulo={onChangeTitulo}
          titulo={titulo}
          onBackClick={handleBack}
        />
      )}

      {paginas == 5 && (
        <Disponibilidad
          onChangePropiedad={onChangePropiedad}
          propiedad={propiedad}
          onBackClick={handleBack}
          setSelectedDisponibilidad={setSelectedDisponibilidad}
          setSelectedDisponibilidad02={setSelectedDisponibilidad02}
          selectedDisponibilidad={selectedDisponibilidad}
          selectedDisponibilidad02={selectedDisponibilidad02}
        />
      )}

      {paginas == 6 && (
        <Servicios
          onChangeServicio={onChangeServicio}
          servicio={servicio}
          onVolverClick={handleVolverClick}
        ></Servicios>
      )}
      <Footer />
    </div>
  );
}
