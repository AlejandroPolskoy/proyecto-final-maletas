import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Componentes/shared';
import './Usuario.scss';
import './MiPerfil.scss'
import Footer from '../../Componentes/Footer/Footer';

export default function MiPerfil() {
    const navigate = useNavigate();
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const userInfo = JSON.parse(localStorage.getItem("user")) || {};
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: userInfo});
    const [form, setForm] = useState([]);

    function updateUserData(formData) {
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        data.append("image", formData.image[0]);

        axios.put( api + "/user/update/" + userInfo._id, data).then( res => {
            if(res.status === 201 || res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                setForm({...form, msg: "Los datos han sido actualizados"});
                //navigate('/');
            } else {
                setForm({...form, msg: res.data.message});
            }
        })
    }

    return (
    <>
    <div className='mi-perfil'>
        <div className='go-back'>
            <img onClick={()=> navigate('/mi-perfil')} src="/assets/icons8Back100Copy@2x.png" alt="back" className="back-img"/>
        </div>
        <form className='mi-perfil_form' onSubmit={handleSubmit(updateUserData)} encType="multipart/form-data">

            <div>
                { userInfo.image && <img src={userInfo.image} alt='user-img' className='user_img'/> }
            </div>

            { form.msg && <p className='mi-perfil_p'>{form.msg}</p> }

            <label className='mi-perfil_label'>Dirección de correo electrónico</label>
            <input type='email' className='mi-perfil_input' {...register('email', {required: true})}></input>
            {errors.email?.type === 'required' && <p className='mi-perfil_p'>"Email is required"</p>}
            
            <label className='mi-perfil_label'>Nombre</label>
            <input type='text' className='mi-perfil_input' {...register('name', {required: true})}></input>
            {errors.name?.type === 'required' && <p className='mi-perfil_p'>"Name is required"</p>}

            <label className='mi-perfil_label'>Apellido</label>
            <input type='text' className='mi-perfil_input' {...register('surname', {required: false})}></input>

            <label className='mi-perfil_label'>Imagen</label>
            <input type='file' className='mi-perfil_input' id="image" {...register('image', {required: false})}></input>

            <button type='submit' className='mi-perfil_btn'> Actualizar </button>
        </form>
    </div>
        <Footer/>
    </>)
    
}