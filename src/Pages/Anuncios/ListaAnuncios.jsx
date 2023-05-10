import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Componentes/shared";
import { VariablesContext } from "../../Shared/VariablesContext";
import axios from "axios";
import './ListaAnuncios.scss'

export default function ListaAnuncios() {
    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const {setReserva, reserva} = useContext(VariablesContext);
    const [listaAnuncios, setListaAnuncios] = useState([]);

    useEffect(()=> {
        getListAnuncios();
    }, [])

    function getListAnuncios() {
        axios.get( api + "/anuncios/getAllLocations").then( res => {
            if(res.status === 200) {
                setListaAnuncios(res.data);
            } else {
                
            }
        })
    }

    function selecteChanged(e, id) {
        console.log( id);
        setReserva({...reserva, anuncio: id})
    }

    function reservar() {
        navigate("/detallesreserva");
    }

    let pixelPercentage = listaAnuncios.stars;
    pixelPercentage = 100 / 5 * listaAnuncios.stars;

    return (
        <div className="lista-anuncios">
        { listaAnuncios && listaAnuncios.map((anuncio, index) => 
        <div onClick={(e) => selecteChanged(e, anuncio._id)}  key={index} >
            <div className="lista-anuncios_contenedor">
                <div className="lista-anuncios_details">
                    <img src={anuncio.image} alt={anuncio.title} className="lista-anuncios_img"/>
                </div>
                <div className="lista-anuncios_details">
                    <h3>{anuncio.title}</h3>
                    <h4>{anuncio.owner && anuncio.owner.name}</h4>
                    <img src={anuncio.owner && anuncio.owner.image} alt={anuncio.owner && anuncio.owner.name} className="lista-anuncios_profile"/>
                    <div className='star-file'>
                    <div className='star-file-inner' style={{'width': pixelPercentage}}>
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                    </div>
                <p className='random'> {`(${comments.length})`} </p>
            </div>
                </div>
            </div>
        </div>
        )}
        <div><button onClick={reservar}>RESERVAR</button></div>
        </div>
    )
}