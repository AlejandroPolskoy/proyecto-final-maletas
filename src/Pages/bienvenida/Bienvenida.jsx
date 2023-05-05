import { useEffect, useState } from 'react';
import { Modal } from '../../Componentes/Modal/Modal';
import './Bienvenida.scss'

export default function Bienvenida() {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);

    
    useEffect(() => {
        setTimeout(Toggle, 2500)}, 
        []);

    return (
        <div className='bienvenida'>
            <img src='assets/logo-maleteo.png' alt='logo maleteo' className='bienvenida_img'/>
            <Modal mostrar={modal} close={Toggle}/> 
        </div>
    );
}