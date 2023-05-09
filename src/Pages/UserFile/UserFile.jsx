import React from "react";
import "./UserFile.scss";
import Footer from "../../Componentes/Footer/Footer";
import {motion} from 'framer-motion';

const UserFile = () => {

  const anuncio = {
      placeTitle: "El hall de Marta",
      description: "Habitación espaciada a 15 minutos del centro de madrid y a 5 minutos del la Linea 1. Además ofrezco información turística personalizada.",
      location: "Tetuan, Madrid",
      stars: 4.5,
      space: "7",
      comments: [
        {  
          img: '/assets/oval@3x.png',
          name: "María",
          date: "En julio de 2019",
          comment: "El hall es acogedor y super chulo, muy limpio, Marta nos ayudó a subir las maletas y nos transmitió muchísima seguridad.",
        },
        {
          img: '/assets/ovalCopy5@3x.png',
          name: "Robert",
          date: "En julio de 2019",
          comment: "Marta is very nice and her space is so cozy, she also showed us the best places to go for tapas in Madrid. Thank you so much.",
        },
        {
          img: '/assets/ovalCopy6@3x.png',
          name: "Carla",
          date: "En junio de 2019",
          comment: "Marta responde rápido y estuvo muy atenta. Nos dió muchos consejos sobre Madrid y pudimos hacer turismo tranquilamente. Su ubicación nos vino genial para el transporte de vuelta.",
        },
      ],
      rules: [
        "Cómo debe ser tu maleta",
        "Tipo de cancelación de reserva",
        "Contactar con tu guardián",
        "Denunciar anuncio",
      ],
      price: 10,
    };

  const user = {
    _id: "6458c13d384adb9a45765ec9",
    email: "a@a.com",
    password: "$2b$10$dQmYugVm/wuJOBKlaJ0vbu.hjD/AtxG/WjGOS8bukojMHwqMYWIvO",
    role: "client",
    surname: "Garcia",
    birthdate: "1111-11-11",
    __v: 0,
    image: "https://res.cloudinary.com/dy6tv0thr/image/upload/v1683547212/maleteo/marta-profile_nevvu2.jpg",
    name: "Marta",
  };

  const images = [{src: '/assets/room1.avif'}, {src: '/assets/room2.avif'}, {src: '/assets/room3.avif'},]

    let pixelPercentage = anuncio.stars;
    pixelPercentage = 100 / 5 * anuncio.stars;

  return (
    <>
    <div className="page-container">
      <div className="file-container">

        {/* SLIDER */}
        <div className="file-container_slider">
          <img className="file-container_slider__img" src="/assets/room1.png" alt="room" />
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>

        {/* INTRO */}
        <div className="file-container_intro">
           <div className="file-container_intro__info">
                <h2 className="file-title"> {anuncio.placeTitle} </h2>
                <p className="file-p"> {anuncio.location} </p>
                <p className="file-p"> Guardian: {user.name} </p>
                <div className='star-file'>
                    <div className='star-file-inner' style={{'width': pixelPercentage}}>
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                        <img className='star-file-star' src='/assets/Star_1.png' alt='star' />
                    </div>
                <p className='random'> {`(${anuncio.comments.length})`} </p>
            </div> 
           </div> 
           <div className="file-container_intro__photo">
                <img className="profile" src={user.image} alt="profile" />
           </div> 
        </div>

        {/* SPAM */}
        <div className="file-container_spam">
            <p className="file-container_spam-red"> ¡Rápido no le queda mucho espacio! </p>
            <img className='file-container_spam-img' src="/assets/maletita@2x.png" alt="suitcase" />
            <p className='file-container_spam-black'> {`3/${anuncio.space}`} </p>
        </div>

        {/* ESPECIFICACIONES */}
        <div className="file-container_promo">
            <div className="file-container_promo_box">
                <div className="file-container_promo_box__img">
                    <img src='/assets/nounHouse2728076Copy4@2x.png' alt='house' />
                </div>
                <div className="file-container_promo_box__text">
                    <h5 className="promo-title">Tipo de locker</h5>
                    <p className="promo-desc">El salón de su casa será el lugar idóneo para alojar tus maletas y cuidar de ellas.</p>
                </div>
            </div>
            <div className="file-container_promo_box">
                <div className="file-container_promo_box__up">
                   <p className="up">19</p>
                   <p className="up">Usuarios</p>
                </div>
                <div className="file-container_promo_box__text">
                    <h5 className="promo-title">Como la patena</h5>
                    <p className="promo-desc">19 usuarios recientes han catalogado su espacio como muy limpo.</p>
                </div>
            </div>
            <div className="file-container_promo_box">
                <div className="file-container_promo_box__up">
                   <p className="up-1"> 95% </p>
                </div>
                <div className="file-container_promo_box__text">
                    <h5 className="promo-title"> Un Fortín </h5>
                    <p className="promo-desc"> el 95% de los usuarios han valorado su experiéncia como muy segura. </p>
                </div>
            </div>
            <div className="file-container_promo_desc">
               <p className="description">{anuncio.description}</p>
            </div>
        </div>

        {/* UBICACION */}
        <div className="file-container_ubi">
            <h4 className="file-container_ubi_title"> Ubicación </h4>
            <img className="file-container_ubi_img" src="/assets/map.jpg" alt="map" />
        </div>

        {/* Reseñas */}
        <div className="file-container_comments">
            <h4 className="file-container_comments_title"> Reseñas </h4>
            {anuncio.comments.map((comment, index)=> {
                return (
                    <div className="comment-box" key={index}>
                        <div className="comment-box_img">
                            <img src={comment.img} alt="profile" />
                        </div>
                        <div className="comment-box_texts">
                            <div className="upper">
                                <h5 className="upper-title">{comment.name}</h5>
                                <p className="upper-text">{comment.date}</p>
                            </div>
                            <p className="lower-text">{comment.comment}</p>
                        </div>
                    </div>
                )
            })}
        </div>

        {/* NORMAS */}
        <div className="file-container_rules">
            <h4 className="file-container_rules_title"> Normas de Marta </h4>
            {anuncio.rules.map((rule, index)=> {
                return (
                    <div className="rules-box" key={index}>
                       <p className="rules-box_p">{rule}</p>
                    </div>
                )
            })}
        </div>

        {/* OTROS LOCKERS */}
        <div className="file-container_lockers">
            <h4 className="file-container_lockers_title"> Normas de Marta </h4>
            <motion.div className='slider-container'>
                <motion.div className='slider' drag='x' dragConstraints={{right: 2, left: -597}}>
                {images.map((image, index) =>{ return (
                    <motion.div key={index} className='item-cont item' style={{'backgroundImage': `url(${image.src})`}} ></motion.div>
                )})}
                </motion.div>
            </motion.div>
        </div>

        {/* PRECIO */}
        <div className="file-container_reserve">
            <div className="file-container_reserve-price">
                <h3 className="price-title"> Total: {anuncio.price} € </h3>
            </div>
            <button className="file-container_reserve-btn"> Reservar Ahora </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UserFile;
