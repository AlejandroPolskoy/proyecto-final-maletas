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




export default function HacerseGuardian() {


    const [paginas, setPaginas] =useState(0);

    const [direccion, setDireccion] = useState("");




    const handleFlechaClick = () => {
        setPaginas(paginas + 1);
    };

   

    const onChangeDireccion = (value) => {
        setDireccion(value);
      };

      const handleVolverClick = () => {
        setPaginas(paginas - 6);
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
                            <p>Describe tu espacio</p>
                            <img onClick = {handleFlechaClick}   className="continuar" src={continuar} alt="continuar"></img>
                        </div>

                        <div>
                            <p>Ubicación </p>
                            <input type="text" 
                            id="input01"
                            className="input"
                            value={direccion}
                            onChange={(event) => onChangeDireccion(event.target.value)}
                        />
                            
                        </div>
                        <div>
                            <p>Fotos</p>
                        </div>
                        <div>
                            <p>Título</p>
                        </div>
                    </div>  
      
                </div>
        )}

        { (paginas==1) && <Descripcion></Descripcion>}

        { (paginas==2) && ( 
        <Ubicacion
         onChangeDireccion = {onChangeDireccion}
         direccion={direccion}
         onVolverClick={handleVolverClick}
         ></Ubicacion>
        )}


        { (paginas==3) && <Fotos></Fotos>}
        { (paginas==4) && <Titulo></Titulo>}
        { (paginas==5) && <Disponibilidad></Disponibilidad>}

        { (paginas==6) && (
        <Servicios
        onVolverClick={handleVolverClick}
        ></Servicios>
        )}

        </div>
    )
}