import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import backI from '../../assets/icons8Back100Copy@2x.png'
import './Register.scss';
import fb from '../../assets/fbMid.png';
import google from '../../assets/googleMid.png';
import axios from 'axios';

const api = "https://maleteo-node.vercel.app";
// const api = "http://localhost:8888";

const Registrar = () => {
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    function valueChanged(e) {
        setForm({...form, [e.target.name] : e.target.value})
    }

    function sendForm() {
        axios.post( api + "/user/register", form).then( res => {
            if(res.status == 201) {
                navigate('/login');
            } else {
                // err message
                console.log( "Error", res.data );
            }
        })
    }
  
    return (
    <>
    <div className='back-icon'>
        <img src={backI} alt='back' />
    </div>
    <nav className='navbar'> 
        <NavLink to='/login' className='route-link'> Iniciar sesión </NavLink>   
        <NavLink to='/register' className='route-link'> Regístrate </NavLink>   
    </nav>
    <h1 className='login-title'>Únete a Maleteo y disfruta de sus ventajas</h1>    
    <div className='socials'>
        <div className='btns'>
            <div className='button-social facebook'> <img src={fb} alt='fb'/> <p>Facebook</p></div>
            <div className='button-social google'> <img src={google} alt='fb'/> <p>Google</p> </div>
        </div>

        <p className='login-p'>o utiliza tu correo electrónico</p>
    </div>
    <form className='form-login'>
        <label className='label-login'>Dirección de correo electrónico</label>
        <input type='email' className='input-login' name="email" onChange={valueChanged}></input>
        
        <label className='label-login'>Nombre</label>
        <input type='text' className='input-login' name="name" onChange={valueChanged}></input>

        <label className='label-login'>Apellido</label>
        <input type='text' className='input-login' name="surname" onChange={valueChanged}></input>

        <label className='label-login'>Contraseña</label>
        <input type='password' className='input-login' name="password" onChange={valueChanged}></input>

        <label className='label-login'>Fecha de nacimiento</label>
        <input type='date' className='input-login' name="birthdate" onChange={valueChanged}></input>
        <p className='date-p'> Para registrarte tendrás que ser mayor de edad. Los usuarios no verán tu fecha de cumpleaños </p>

        <label className='check'>
            <input type='checkbox' className='checkbox' />
            <p className='check-p'>Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y totros correos electrónicos de Maleteo</p>
        </label>

        <button type='button' className='btn-login' onClick={sendForm}> Registrarse </button>
    </form>
</>
  )
}

export default Registrar;
