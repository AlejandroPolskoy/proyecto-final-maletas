import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';


const Login = () => {


  return (
    <>
        <div className='back-icon'>
            <img src='/assets/icons8Back100Copy@2x.png' alt='back' />
        </div>
        <nav className='navbar'>
            <NavLink to='/login' className='route-link'> Iniciar sesión </NavLink>   
            <NavLink to='/register' className='route-link'> Regístrate </NavLink>   
        </nav>
        <h1 className='login-title'>Inicia sesión ahora</h1>
            <div className='socials'>
                <div className='btns'>
                    <div className='button-social facebook'> <img src='/assets/fbMid.png' alt='fb'/> <p>Facebook</p></div>
                    <div className='button-social google'> <img src='/assets/googleMid.png' alt='fb'/> <p>Google</p> </div>
                </div>
                
                <p className='login-p'>o utiliza tu correo electrónico</p>
            </div>
        <form className='form-login'>
            <label className='label-login'>Dirección de correo electrónico</label>
            <input type='email' className='input-login'></input>

            <label className='label-login'>Contraseña</label>
            <input type='password' className='input-login'></input>

            <button type='submit' className='btn-login'> Inicia sesión </button>
        </form>
    </>
   
  )
}

export default Login;
