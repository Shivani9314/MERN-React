import React from 'react'
import filter from './icons/filter.png'
import up_down from './icons/up-down.png'

function Button() {

    const buttonDetails = [
        {
            name: 'Filter',
            icon:  filter
        },

        {
            name: 'Distance',
            icon:  up_down
        },

        {
            name: 'Rating 4.0+',
            icon:  ""
        },

        {
            name: 'Pubs & Bars',
            icon:  ""
        },
    ]

    function render(props , index){
        return(
           <div className='btn' key={index}>
               <button> {props.icon ? <img src={props.icon} /> : ""}{props.name}</button>
           </div>
        )
    }
  return (
    <>
        {buttonDetails.map(render)}
    </>
  )
}

export default Button