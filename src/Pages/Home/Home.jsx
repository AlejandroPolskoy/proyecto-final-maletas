import Footer from "../../Componentes/Footer/Footer";
import { NavLink, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    if(!localStorage.getItem("user")) navigate("/bienvenida");

    return (
        <div>
        <p>Esto es la home</p>
            <Footer/>
        </div>
    );
}