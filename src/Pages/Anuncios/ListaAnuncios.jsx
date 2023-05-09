import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Componentes/shared";
import { VariablesContext } from "../../Shared/VariablesContext";
import axios from "axios";

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

    function selecteChanged(e) {
        console.log( e.target.value );
        setReserva({...reserva, anuncio: e.target.value})
    }

    function reservar() {
        navigate("/detallesreserva");
    }

    return <div>
        <select onChange={selecteChanged}>
        { listaAnuncios && listaAnuncios.map((anuncio, index) => 
            <option key="index" value={anuncio._id}>{anuncio.title}</option>
        )}
        </select>
        <div><button onClick={reservar}>RESERVAR</button></div>
    </div>
}