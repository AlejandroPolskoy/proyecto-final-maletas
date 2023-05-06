import React from 'react';
import { NavLink} from 'react-router-dom';
import './Register.scss';

const Registrar = () => {
  return (
    <>
    <div className='back-icon'>
        <img src='/assets/icons8Back100Copy@2x.png' alt='back' />
    </div>
    <nav className='navbar'> 
        <NavLink to='/login' className='route-link'> Iniciar sesión </NavLink>   
        <NavLink to='/register' className='route-link'> Regístrate </NavLink>   
    </nav>
    <h1 className='login-title'>Únete a Maleteo y disfruta de sus ventajas</h1>    
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
        
        <label className='label-login'>Nombre</label>
        <input type='text' className='input-login'></input>

        <label className='label-login'>Apellido</label>
        <input type='text' className='input-login'></input>

        <label className='label-login'>Contraseña</label>
        <input type='password' className='input-login'></input>

        <label className='label-login'>Fecha de nacimiento</label>
        <input type='date' className='input-login'></input>
        <p className='date-p'> Para registrarte tendrás que ser mayor de edad. Los usuarios no verán tu fecha de cumpleaños </p>

        <label className='check'>
            <input type='checkbox' className='checkbox'/>
            <p className='check-p'>Quiero recibir consejos sobre como gestionar mi equipaje, ofertas, novedades y totros correos electrónicos de Maleteo</p>
        </label>
        

        <button type='submit' className='btn-login'> Registrarse </button>
    </form>
</>
  )
}

export default Registrar;
