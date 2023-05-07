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

    const [direccion, setDireccion] = useState("");

    const [titulo, setTitulo] = useState("");

    const [foto, setFoto] = useState("");





    const handleFlechaClick = () => {
        setPaginas(paginas + 1);
    };

   

    const onChangeDireccion = (value) => {
        setDireccion(value);
      };

    const onChangeFoto = (value) => {
        setFoto(value);
    };

    const onChangeTitulo = (value) => {
        setTitulo(value);
    };

      const handleVolverClick = () => {
        setPaginas(paginas - 6);
      };

      const handleBack = () => {
        setPaginas(paginas - 1);
      };

 
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
                        <div className="describe">
                            <p className="categoria--negrita">Describe tu espacio</p>
                            <img onClick = {handleFlechaClick}   className="continuar" src={continuar} alt="continuar"></img>
                        </div>

                        <div>
                            <p className="categoria">Ubicación </p>
                                <input type="text" 
                                id="input01"
                                className="input"
                                value={direccion}
                                onChange={(event) => onChangeDireccion(event.target.value)}
                            />
                            
                        </div>
                        <div>
                            <p className="categoria">Fotos</p>
                                <input type="file" 
                                    id="input02"
                                    className="input"
                                    files={foto}
                                    onChange={(event) => onChangeFoto(event.target.files[0])}
                                    />

                        </div>
                        <div>
                            <p className="categoria">Título </p>
                                <input type="text" 
                                id="input03"
                                className="input"
                                value={titulo}
                                onChange={(event) => onChangeTitulo(event.target.value)}
                                />
                        </div>
                        <div>
                            <p className="categoria">Disponibilidad y horarios</p>
                        </div>
                        <div>
                            <p className="categoria">Servicios</p>
                        </div>
                    </div>  
      
                </div>
            )}




        { (paginas==1) && (
        <Descripcion
        onBackClick= {handleBack}
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
            foto={foto}
            onBackClick={handleBack}
         />)}


        { (paginas==4) && (
        <Titulo
            onChangeTitulo={onChangeTitulo}
            titulo={titulo}
            onBackClick={handleBack}
         />)}

        
        { (paginas==5) && (<Disponibilidad onBackClick={handleBack}/>)}


        { (paginas==6) && (
        <Servicios
        onVolverClick={handleVolverClick}
        ></Servicios>
        )}

        </div>
    )
}