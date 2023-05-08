import React from 'react';
import { useState } from 'react';
import backIcon from '../../assets/icons8Back100Copy@3x.png';
import flecha from '../../assets/circulo_flecha.png';
import continuar from '../../assets/continuar.png';
import "./Anuncios.scss";
import "./HacerseGuardian.scss";
import { Link } from 'react-router-dom'
import Ubicacion from './Ubicacion';
import Fotos from './Fotos';
import Titulo from './Titulo';
import Disponibilidad from './Disponibilidad';
import Servicios from './Servicios';
import Descripcion from './Descripcion';
import { useRef } from 'react';




export default function HacerseGuardian() {


    const [paginas, setPaginas] =useState(0);

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

      const [selectedOption, setSelectedOption] = useState("");

      const [selectedOption02, setSelectedOption02] = useState("");

      const [selectedFileName, setSelectedFileName] = useState("");

      const [selectedDisponibilidad, setSelectedDisponibilidad] = useState("");

      const [selectedDisponibilidad02, setSelectedDisponibilidad02] = useState("");


 
    return (

        <div>
            
            {paginas !== 0 && paginas !== 6 && (
            <img onClick = {handleFlechaClick}   className="flecha" src={flecha} alt="flecha"></img>
            )}

            
            {paginas===0 && (

                <div>

                    <div className="configuracionContainer">
                        <p className="configuracionTitulo">Configura tu espacio en muy pocos pasos</p>
                    </div>  

                    <div className="items__container">
                        <div>
                            <div className="describe">
                                <p className="categoria--negrita">Describe tu espacio</p>
                                <img onClick = {handleFlechaClick}   className="continuar" src={continuar} alt="continuar"></img>

                            </div>
                            <div className="describe__options">
                                <input type="text" 
                                    id="input00"
                                    placeholder="tipo de espacio"
                                    className="subInput"
                                    value={selectedOption}
                                />
                                <input type="text" 
                                    id="input001"
                                    className="subInput"
                                    value={selectedOption02}
                                />
                            </div>
                        </div>

                        <div>
                            <p className="categoria">Ubicación </p>
                            <input type="text" 
                                id="input01"
                                className="input"
                                value={direccion}
                            />
                            
                        </div>
                        <div>
                            <p className="categoria">Fotos</p>
                                <input type="text" 
                                    id="input02"
                                    className="input"
                                    value={selectedFileName}
                                    />

                        </div>
                        <div>
                            <p className="categoria">Título </p>
                                <input type="text" 
                                id="input03"
                                className="input"
                                value={titulo}
                                />
                        </div>
                        <div>
                            <div>
                            <p className="categoria">Disponibilidad y horarios</p>
                            </div>
                            <div className="describe__options">
                                <input type="text" 
                                    id="input00"
                                    placeholder="tipo de espacio"
                                    className="input"
                                    value={selectedDisponibilidad}
                                />
                                <input type="text" 
                                    id="input001"
                                    className="input"
                                    value={selectedDisponibilidad02}
                                />
                            </div>
                        </div>
                        <div>
                            <p className="categoria">Servicios</p>
                            <input type="text" 
                                id="input03"
                                className="input"
                                value={servicio}
                                />
                        </div>
                    </div>  
      
                </div>
            )}




        { (paginas==1) && (
        <Descripcion
        onChangePropiedad = {onChangePropiedad}
        propiedad={propiedad}
        onBackClick= {handleBack}
        setSelectedOption={setSelectedOption}
        setSelectedOption02={setSelectedOption02}
        selectedOption={selectedOption}
        selectedOption02={selectedOption02}
        />)}
        

        { (paginas==2) && ( 
        <Ubicacion
         onChangeDireccion = {onChangeDireccion}
         direccion={direccion}
         onBackClick={handleBack}
         ></Ubicacion>)}
        

        { (paginas==3) && (
        <Fotos
            onChangeFotos={onChangeFoto}
            onBackClick={handleBack}
            selectedFileName={selectedFileName}
            setSelectedFileName={setSelectedFileName}
         />)}


        { (paginas==4) && (
        <Titulo
            onChangeTitulo={onChangeTitulo}
            titulo={titulo}
            onBackClick={handleBack}
         />)}

        
        { (paginas==5) && (
        <Disponibilidad
        onChangePropiedad = {onChangePropiedad}
        propiedad={propiedad}
        onBackClick= {handleBack}
        setSelectedDisponibilidad={setSelectedDisponibilidad}
        setSelectedDisponibilidad02={setSelectedDisponibilidad02}
        selectedDisponibilidad={selectedDisponibilidad}
        selectedDisponibilidad02={selectedDisponibilidad02}
        />)}


        { (paginas==6) && (
        <Servicios
        onChangeServicio = {onChangeServicio}
        servicio={servicio}
        onVolverClick={handleVolverClick}
        ></Servicios>
        )}

        </div>
    )
}