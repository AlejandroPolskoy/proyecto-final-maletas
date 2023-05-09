import React, { useState } from 'react';
import { NavLink, useNavigate, redirect, useFormAction } from 'react-router-dom';
import backI from '../../assets/icons8Back100Copy@2x.png';
import './Login.scss';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { api } from '../../Componentes/shared';

const Login = () => {
    const [form, setForm] = useState([]);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    function sendForm() {
        try {
            axios.post( api + "/user/login", getValues()).then( res => {
                console.log(res);
                if(res.status === 200) {
                    localStorage.setItem('user', JSON.stringify(res.data.userInfo));
                    localStorage.setItem('token', res.data.token);
                    navigate('/');
                } else {
                    setForm({...form, msg: "Email o contraseña es incorrecto"});
                }
            })
        } catch(err) {
            console.log( "Wrong data:", err );
        }
        
    }

  return (
    <>
        <div className='back-icon'>
        <NavLink to='/bienvenida'> <img src={backI} alt='back' /> </NavLink>
        </div>
        <nav className='navbar'>
            <NavLink to='/login' className='route-link'> Iniciar sesión </NavLink>   
            <NavLink to='/register' className='route-link'> Regístrate </NavLink>   
        </nav>
        <h1 className='login-title'>Inicia sesión ahora</h1>
            <div className='socials'>
                <div className='btns'>
                    <div className='button-social facebook'> <img src='/assets/fbMid.png' alt='fb'/> <p>Facebook</p></div>
                    <div className='button-social google'> <img src='/assets/googleMid.png' alt='google'/> <p>Google</p> </div>
                </div>
                
                <p className='login-p'>o utiliza tu correo electrónico</p>
            </div>
        <form className='form-login' onSubmit={handleSubmit(sendForm)}>
            
            <label className='label-login'>Dirección de correo electrónico</label>
            <input type='email' className='input-login' {...register('email', {required: true})}></input>
            {errors.email?.type === 'required' && <p className='date-p'>"Email is required"</p>}
            { form.msg && <p className='date-p'>{form.msg}</p> }
            
            <label className='label-login'>Contraseña</label>
            <input type='password' className='input-login' {...register('password', {required: true})}></input>
            {errors.password?.type === 'required' && <p className='date-p'>"Password is required"</p>}

            <button type='submit' className='btn-login'> Inicia sesión </button>
        </form>
    </>
   
  )
}

export default Login;
