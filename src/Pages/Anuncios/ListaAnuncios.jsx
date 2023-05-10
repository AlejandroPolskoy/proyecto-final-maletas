import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Componentes/shared";
import { VariablesContext } from "../../Shared/VariablesContext";
import axios from "axios";
import './ListaAnuncios.scss'
let selectedID;
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
        selectedID = id;
    }

    function reservar() {
        
        navigate("/user-file/" + selectedID);
    }

    

    const stars = 4.5;
    let pixelPercentage = stars;
    pixelPercentage = 100 / 5 * stars;

    return (
        <div className="lista-anuncios">
         <h2 className="lista-anuncios_title"> Tus guardianes más cercanos:</h2>
        { listaAnuncios && listaAnuncios.map((anuncio, index) => 
        <div onClick={(e) => selecteChanged(e, anuncio._id)}key={index} >
            <div className={selectedID == anuncio._id ? "lista-anuncios_selected lista-anuncios_contenedor": "lista-anuncios_contenedor"} >
                <div className="lista-anuncios_details">
                    <img src={anuncio.image} alt={anuncio.title} className="lista-anuncios_img"/>
                </div>
                <div className="lista-anuncios_details">
                    <h3 className="lista-anuncios_title">{anuncio.title}</h3>
                    <img src={anuncio.owner && anuncio.owner.image} alt={anuncio.owner && anuncio.owner.name} className="lista-anuncios_profile"/>
                    <h4 className="lista-anuncios_nombre">Guardián: {anuncio.owner && anuncio.owner.name}</h4>
                    <div className='star-file'>
                    <div className='star-file-inner' style={{'width': pixelPercentage}}>
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                    </div>
            </div>
                </div>
            </div>
        </div>
        )}
        <div><button onClick={reservar} className="lista-anuncios_btn">Ver detalles</button></div>
        </div>
    )
}