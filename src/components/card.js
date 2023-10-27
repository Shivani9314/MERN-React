import React from 'react';
import ImageComponent from './image';
import './card.css';


function CardComponent(props){
    return (
      <div className='card'>
        <ImageComponent image= {props.image} name = {props.name} timer = {props.timer}/>
        <h5 className='title'>{props.title}</h5>
        <div className='view-box'>
          <p className='views'>{props.views}</p>
          <p className='duration'>{props.duration}</p>
        </div>
      </div>
    );
  }

export default CardComponent;