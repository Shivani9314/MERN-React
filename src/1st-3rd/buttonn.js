import React from 'react';
import './buttonn.css'

function ButtonComps(props) {
  return (
    <div className='btn-div'>
        <button className='btn'>{props.btn}<p className='icon'><i class="fa-solid fa-arrow-right"></i></p></button>
    </div>
  )
}

export default ButtonComps;