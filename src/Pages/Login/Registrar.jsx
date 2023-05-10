import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import backI from '../../assets/icons8Back100Copy@2x.png'
import './Register.scss';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { api } from '../../Componentes/shared';

const Registrar = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [form, setForm] = useState([]);

    function sendForm() {
        axios.post( api + "/user/register", getValues()).then( res => {
            if(res.status == 201) {
                navigate('/login');
            } else {
                // err message
                setForm({...form, msg: res.data.message});
            }
        })
    }

    function validateAge(value) {
        return new Date().getFullYear() - new Date(value).getFullYear() >= 18;
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
    <h1 className='login-title'>Únete a Maleteo y disfruta de sus ventajas</h1>    
    <div className='socials'>
        <div className='btns'>
            <div className='button-social facebook'> <img src='/assets/fbMid.png' alt='fb'/> <p>Facebook</p></div>
            <div className='button-social google'> <img src='/assets/googleMid.png' alt='google'/> <p>Google</p> </div>
        </div>

        <p className='login-p'>o utiliza tu correo electrónico</p>
    </div>
    <form className='form-login' onSubmit={handleSubmit(sendForm)}>
        
        { form.msg && <p className='date-p'>{form.msg}</p> }
        <label className='label-login'>Dirección de correo electrónico</label>
        <input type='email' className='input-login' {...register('email', {required: true})}></input>
        {errors.email?.type === 'required' && <p className='date-p'>"Email is required"</p>}
        
        <label className='label-login'>Nombre</label>
        <input type='text' className='input-login' {...register('name', {required: true})}></input>
        {errors.name?.type === 'required' && <p className='date-p'>"Name is required"</p>}

        <label className='label-login'>Apellido</label>
        <input type='text' className='input-login' {...register('surname', {required: false})}></input>

        <label className='label-login'>Contraseña</label>
        <input type='password' className='input-login' {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/})}></input>
        {errors.password?.type === 'required' && <p className='date-p'>"Password is required"</p>}
        {errors.password?.type === 'pattern' && <p className='date-p'>"Password has to have at least 8 characters and 1 capital letter"</p>}

        <label className='label-login'>Fecha de nacimiento</label>
        <input type='date' className='input-login' {...register('birthdate', {required: true, validate: validateAge})}></input>
        {errors.birthdate?.type === 'validate' && <p className='date-p'> Para registrarte tendrás que ser mayor de edad. Los usuarios no verán tu fecha de cumpleaños </p> }

        <label className='check'>
            <input type='checkbox' className='checkbox' />
            <p className='check-p'>Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y totros correos electrónicos de Maleteo</p>
        </label>

        <button type='submit' className='btn-login'> Registrarse </button>
    </form>
</>
  )
}

export default Registrar;
