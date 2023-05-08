import { useState } from "react";
import Footer from "../../Componentes/Footer/Footer";
import backIcon from "../../assets/icons8Back100Copy@2x.png";
import "./Reserva.scss"

export default function Reserva() {
    const [myArray, setMyArray] = useState([
    {
      id: 1,
      name: "Carlos",
      image: "/assets/bitmapCopy5@3x.png",
      depositoDia: "30 de Julio",
      depositoHora: "16:30",
      recogidaDia: "30 de Julio",
      recogidaHora: "20:00",
    },{
        id: 2,
        name: "Cristina",
        image: "/assets/bitmapCopy6@3x.png",
        depositoDia: "30 de Julio",
        depositoHora: "16:30",
        recogidaDia: "30 de Julio",
        recogidaHora: "20:00",
    },{
        id: 3,
        name: "Joaquín",
        image: "/assets/bitmapCopy7@3x.png",
        depositoDia: "30 de Julio",
        depositoHora: "16:30",
        recogidaDia: "30 de Julio",
        recogidaHora: "20:00",
    },
  ]);

  const eliminar = (listId) => {
    const newListFiltrar = myArray.filter(list => list.id !== listId);
    setMyArray(newListFiltrar)
}

  return (
    <>
      <div className="reserva">
        <a href="javascript:history.back()">
          <img className="reserva_atras" src={backIcon} alt="back"></img>
        </a>
        <h2>Petición de reserva</h2>
        {myArray && myArray.map((list,index) => 
        <div key={index} className="reserva_user">
            <div className="reserva_user_all">
                <div className="reserva_user_img">
                    <img src={list.image} alt={list.name} className="user_img"/>
                </div>
                <div className="reserva_user_detail">
                    <h4 className="user_title">{list.name}</h4>
                    <p>Depósito - {list.depositoDia} {list.depositoHora}</p>
                    <p>Recogida - {list.recogidaDia} {list.recogidaHora}</p>
                </div>
                <div className="reserva_user_btn">
                    <button>Aceptar</button>
                    <p onClick={() => eliminar(list.id)}>Declinar</p>
                </div>
            </div>
        </div>
        )}
      </div>
      <Footer />
    </>
  );
}
