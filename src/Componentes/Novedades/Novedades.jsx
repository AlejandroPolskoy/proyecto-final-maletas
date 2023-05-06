import React from 'react';
import './Novedades.scss';
import {motion} from 'framer-motion';

const Novedades = () => {

  const images = [
    {
      id: 1,
      src: '/assets/img1.jpeg',
      alt: 'img1'
    }, {
      id: 1,
      src: '/assets/img2.jpeg',
      alt: 'img2'
    },{
      id: 1,
      src: '/assets/img3.jpeg',
      alt: 'img3'
    }
  ]


  return (
    <>
      <div className='news-container'>
        <h1 className='news-container-title'>Novedades</h1>
        <motion.div className='slider-container'>
          <motion.div className='slider' drag='x' dragConstraints={{right: 2, left: -504}}>
            {images.map((image, index) =>{ return (
                <motion.div key={index} className='item-cont item' style={{'backgroundImage': `url(${image.src})`}}>
                    <h4 className='item-cont_title'> Blog </h4>
                    <p className='item-cont_p'> Un nuevo artículo de nuestro viajero empedernido.</p>
                    <p className='item-cont_a'> Leer más </p>
              </motion.div>
            )})}
          </motion.div>
        </motion.div>
      </div>
     
    </>
  
  )
}

export default Novedades
