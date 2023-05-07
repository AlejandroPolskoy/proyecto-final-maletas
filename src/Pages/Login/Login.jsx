import React, { useState } from 'react';
import { NavLink, useNavigate, redirect } from 'react-router-dom';
import backI from '../../assets/icons8Back100Copy@2x.png';
import './Login.scss';
import fb from '../../assets/fbMid.png';
import google from '../../assets/googleMid.png';
import axios from 'axios';

const api = "https://maleteo-node.vercel.app";
//const api = "http://localhost:8888";

const Login = () => {
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    function valueChanged(e) {
        setForm({...form, [e.target.name] : e.target.value})
    }

    function sendForm() {
        try {
            axios.post( api + "/user/login", form).then( res => {
                if(res.status === 200) {
                    localStorage.setItem('user', JSON.stringify(res.data.userInfo));
                    localStorage.setItem('token', res.data.token);
                    navigate('/');
                } else {
                    setForm({...form, msg:"Email o contrasena es incorrecto"});
                }
            })
        } catch(err) {
            console.log( "Wrong data:", err );
        }
        
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
        <h1 className='login-title'>Inicia sesión ahora</h1>
            <div className='socials'>
                <div className='btns'>
                    <div className='button-social facebook'> <img src={fb} alt='fb'/> <p>Facebook</p></div>
                    <div className='button-social google'> <img src={google} alt='fb'/> <p>Google</p> </div>
                </div>
                
                <p className='login-p'>o utiliza tu correo electrónico</p>
            </div>
        <form className='form-login'>
            { form.msg && <div className='err-massage'>{form.msg}</div> }
            <label className='label-login'>Dirección de correo electrónico</label>
            <input type='email' className='input-login' name="email" onChange={valueChanged}></input>

            <label className='label-login'>Contraseña</label>
            <input type='password' className='input-login' name="password" onChange={valueChanged}></input>

            <button type='button' className='btn-login' onClick={sendForm}> Inicia sesión </button>
        </form>
    </>
   
  )
}

export default Login;
