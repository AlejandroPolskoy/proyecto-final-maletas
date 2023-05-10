import React, { useState } from 'react';
import './Experiencias.scss';

const Experiencias = () => {

    const [expShown, setExpShown] = useState(2);

    const experiences = [
        {
            img: '/assets/exp2.png',
            title: 'Un pedazito de Italia en Gijón',
            description: 'Sin lugar a duda es uno de los destinos gastronómicos por excelencia de esta gran ciudad situada en el norte de España.',
            stars: 2
        },{
            img: '/assets/exp1.png',
            title: 'Sumérgete en Barcelona',
            description: 'Si estás dispuesto a aventurarte en el mundo del submarinismo y venir a sentir una vivencia insólita en L’Aquàrium.',
            stars: 3.2
        },{
            img: '/assets/exp2.png',
            title: 'Un pedacito de infierno',
            description: 'Sin lugar a duda es uno de los destinos calurosos por excelencia.',
            stars: 5
        },{
            img: '/assets/exp1.png',
            title: 'Sumérgete en la Miseria',
            description: 'Si estás dispuesto a aventurarte en el mundo de la programacion y venir a sentir una violencia insólita en: Javascript para doomies.',
            stars: 1
        }
    ];
    
    const addMore = () => {
        setExpShown(expShown + 1)
    }

  return (
    <>
    <h1 className='experience-intro'> Experiencias </h1>
        <div className='exp-container'>
                {experiences.slice(0, expShown).map((experience, index)=> {

                    let pixelPercentage = experience.stars;
                    pixelPercentage = 100 / 5 * experiences[index].stars;

                    return (
                        <div key={index} className='exp-card'>
                            <div className='exp-card_upper'>
                                <img src={experience.img} alt='simg' />
                                <h3 className='exp-card_upper__title'> {experience.title} </h3>
                                <p className='exp-card_upper__p'>{experience.description}</p>
                            </div>
                            <div className='star-box'>
                                <p className='star-num'> {experience.stars} </p>
                                <div className='star-box-inner' style={{'width': pixelPercentage}}>
                                    <img className='star-box-star' src='/assets/Star_1.png' alt='star' />
                                    <img className='star-box-star' src='/assets/Star_1.png' alt='star' />
                                    <img className='star-box-star' src='/assets/Star_1.png' alt='star' />
                                    <img className='star-box-star' src='/assets/Star_1.png' alt='star' />
                                    <img className='star-box-star' src='/assets/Star_1.png' alt='star' />
                                </div>
                                <p className='random'> (120) </p>
                            </div> 
                            
                        </div>
                    )
                })}  
                {expShown < experiences.length && (
                    <button className='exp-btn' onClick={addMore}> Mostrar más </button>
                    )}
        </div>

      
        
    </>
  )
}

export default Experiencias;
