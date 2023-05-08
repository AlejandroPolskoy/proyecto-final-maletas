import React from "react";
import './UserFile.scss'

const UserFile = () => {

    const user = [
        {
            placeTitle: '',
            description: '',
            location: '',
            stars: '',
            space: '',
            comments: [
            {
                name: 'María', 
                date: 'En julio de 2019', 
                comment: 'El hall es acogedor y super chulo, muy limpio, Marta nos ayudó a subir las maletas y nos transmitió muchísima seguridad.'
            },
            {
                name: 'Robert',
                date: 'En julio de 2019',
                comment: 'Marta is very nice and her space is so cozy, she also showed us the best places to go for tapas in Madrid. Thank you so much.'
            },
            {
                name: 'Carla', 
                date: 'En junio de 2019', 
                comment: 'Marta responde rápido y estuvo muy atenta. Nos dió muchos consejos sobre Madrid y pudimos hacer turismo tranquilamente. Su ubicación nos vino genial para el transporte de vuelta.'
            }
            ],
            rules: ['Cómo debe ser tu maleta', 'Tipo de cancelación de reserva','Contactar con tu guardián','Denunciar anuncio'];
        }
    ]


  return (
    <div className="page-container">
      <div className="file-container">
        <div className="file-container_slider">
          <img className="file-container_slider__img" src="/assets/room1.png" alt="room"/>
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFile;
