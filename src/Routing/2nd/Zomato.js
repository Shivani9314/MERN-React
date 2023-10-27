import React from 'react'
import { Route, Routes } from "react-router-dom";
import Deliverypg from './Components/Deliverypg'
import Dining from './Components/Dining'
import Nightlife from './Components/Nightlife'
import Header from './HomePage/Header';
import './Home.css'


function Zomato() {
    return (
        <>
            <div className="container full-container">
                <Header />
            </div>
            <hr />


            <Routes>
                <Route path='/' element={<Deliverypg />} />
                <Route path='/Dining-out' element={<Dining />} />
                <Route path='/Nightlife' element={<Nightlife />} />
            </Routes>
        </>
  )
}

export default Zomato