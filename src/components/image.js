import React from 'react';
import './image.css'


function ImageComponent(props) {
  return (
    <div className='image'>
       <img className='img' src={props.image} alt={props.name} />
       <p className='timer'>{props.timer}</p>
    </div>
  );
}

export default ImageComponent;