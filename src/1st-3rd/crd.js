import React from 'react'
import ButtonComps from './buttonn';
import './card.css';

function CardComp(props) {
  return (
    <div className='descp-box'>
      <p className='icons'><i class="fa-solid fa-boxes-stacked"></i></p>
      <h3 className='heading'>{props.title}</h3>
      <p className='heading-descp'>{props.descp}</p>
      <div className='btn-divv'>
      <ButtonComps btn = "Learn More"/>
      </div>
      
    </div>
  );
}

export default CardComp;