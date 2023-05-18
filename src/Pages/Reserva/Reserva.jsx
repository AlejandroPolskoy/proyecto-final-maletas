import { useEffect, useState } from "react";
import Footer from "../../Componentes/Footer/Footer";
import backIcon from "../../assets/icons8Back100Copy@2x.png";
import "./Reserva.scss"
import axios from "axios";
import { api } from "../../Componentes/shared";
import { NavLink, useNavigate } from "react-router-dom";

export default function Reserva() {
    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const [reservas, setReservas] = useState([]);

  const confirmar = (id) => {
    axios.put( api + "/anuncios/acceptReserva/" + id).then( res => {
      if(res.status === 200) {
        //getReservas();
        navigate("/chat");
      }
    })
  }

  const decline = (id) => {
    axios.put( api + "/anuncios/declineReserva/" + id).then( res => {
      if(res.status === 200) {
        getReservas();
      }
    })
  }

  useEffect(()=> {
    getReservas();
  }, []);

  function getReservas() {
    axios.get( api + "/anuncios/getReservas/" + userInfo._id).then( res => {
      if(res.status === 200) {
        setReservas(res.data);
      }
    })
  }

  return (
    <>
      <div className="reserva">
        <NavLink to="/">
          <img className="reserva_atras" src={backIcon} alt="back"></img>
        </NavLink>
        <h2>Petición de reserva</h2>
        {reservas && reservas.map((ubicacion) => ubicacion.map((reserva,index) => <div key={index} className="reserva_user">
            <div className="reserva_user_all">
                <div className="reserva_user_img">
                    <img src={reserva.user.image} alt={reserva.user.name} className="user_img"/>
                </div>
                <div className="reserva_user_detail">
                    <h4 className="user_title">{reserva.name}</h4>
                    <p>Depósito - {reserva.date_in} {reserva.time_in}</p>
                    <p>Recogida - {reserva.date_out} {reserva.time_out}</p>
                </div>
                <div className="reserva_user_btn">
                    <button onClick={() => confirmar(reserva._id)}>Aceptar</button>
                    <p onClick={() => decline(reserva._id)}>Declinar</p>
                </div>
            </div>
        </div>
        ))}
        {!reservas || Math.max(...reservas.map((item)=> item.length )) == 0 && <div>
          No hay reservas pendientes
        </div>}
      </div>
      <Footer />
    </>
  );
}
