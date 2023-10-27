import React from 'react';
import ButtonComps from './buttonn';
import './heading.css';

function HeadingComp() {
  return (
    <div className='head-box'>
        <h2 className='head'>Your user research Swiss Army knife</h2>
        <div className='btnn-box'>
        <ButtonComps btn= "See all Featuers"/>
        </div>
    </div>
  );
}

export default HeadingComp;