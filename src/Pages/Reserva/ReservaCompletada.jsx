import fenix from "../../assets/fenix@3x.png";
import xIcon from "../../assets/x.png";
import "./ReservaCompletada.scss";

export default function ReservaCompletada(props) {

    const {setPaginas} = props;

    return(

        <div>
            
            <div className="xIcon__container">
                <img onClick={props.onBackClick} className="xIcon" src={xIcon}/>
            </div>

            <div>
                <p className="detalle__titular">Reserva Completada</p>
            </div>

            <div>
                <img className="fenix__img" src={fenix} />
            </div>

            <p className="free">BE FREE!</p>

            <p className="contacta">Contacta ya con tu guardián y espera a que acepte tu reserva</p>
        </div>
    )
}