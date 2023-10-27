import React from 'react'
import Delievry from '../Delievry/Delievry'
import TopFood from '../Delievry/TopFood'
import Button from '../Button'

function Deliverypg() {
  return (
    <>
        <div className="container">
            <div className="btn-area">
                <Button />
            </div>
        </div>
        <TopFood/>
        <div className="container">
            <Delievry />
        </div>
    </>
  )
}

export default Deliverypg