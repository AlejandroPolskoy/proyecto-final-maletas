import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../Componentes/shared';
import './Usuario.scss';

export default function MiPerfil() {
    if(!localStorage.getItem("user")) navigate("/bienvenida");
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("user")) || {};
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({defaultValues: userInfo});
    const [form, setForm] = useState([]);

    function updateUserData(formData) {
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        data.append("image", formData.image[0]);

        axios.put( api + "/user/update/" + userInfo._id, data).then( res => {
            if(res.status == 201 || res.status == 200) {
                localStorage.setItem('user', JSON.stringify(res.data));
                setForm({...form, msg: "Los datos han sido actualizados"});
                //navigate('/');
            } else {
                setForm({...form, msg: res.data.message});
            }
        })
    }

    return <div>
        <div className='go-back'>
            <img onClick={()=> navigate('/mi-perfil')} src="/assets/icons8Back100Copy@2x.png" alt="back" className="back-img"/>
        </div>
        <form className='form-login' onSubmit={handleSubmit(updateUserData)} encType="multipart/form-data">

            <div>
                { userInfo.image && <img src={userInfo.image} alt='user-img' className='user_img'/> }
            </div>

            { form.msg && <p className='date-p'>{form.msg}</p> }

            <label className='label-login'>Dirección de correo electrónico</label>
            <input type='email' className='input-login' {...register('email', {required: true})}></input>
            {errors.email?.type === 'required' && <p className='date-p'>"Email is required"</p>}
            
            <label className='label-login'>Nombre</label>
            <input type='text' className='input-login' {...register('name', {required: true})}></input>
            {errors.name?.type === 'required' && <p className='date-p'>"Name is required"</p>}

            <label className='label-login'>Apellido</label>
            <input type='text' className='input-login' {...register('surname', {required: false})}></input>

            <label className='label-login'>Imagen</label>
            <input type='file' className='input-login' id="image" {...register('image', {required: false})}></input>

            <button type='submit' className='btn-login'> Actualizar </button>
        </form>
    </div>
}