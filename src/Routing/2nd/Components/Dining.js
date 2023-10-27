import React from 'react'
import Dinning from '../Dinning/Dinning'
import Button from '../Button'
import './Dinning.css'
import '../Home.css'

function Dining() {
  return (
    <>

            <div className='background-gray'>
                <div className='container'>
                    <div className="top-food-head head">
                        <p>Collections</p>
                    </div>
                    <div className="collection-text top">
                        <span>Explore curated list of top restaurants, cafes, pubs, and bars in Jabalpur, based on trends</span>
                        <span className='red'>All collections in Jabalpur</span>
                    </div>

                    <div className="collection-items top-item">

                        <div className="item">

                            <img src="https://b.zmtcdn.com/data/collections/dc57ef2c98b94359031a1b4313da2958_1582256430.jpg?fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*" alt="" />
                            <p className="img-title">Veggie Friendly</p>
                            <p className="places">11 Places &#10151;</p>
                        </div>

                        <div className="item ">
                            <img src="https://b.zmtcdn.com/data/collections/dbb83e0eaec19bf21898eb66506ddbec_1425304055_l.jpg" alt="" />
                            <p className="img-title">Terrefic Thali</p>
                            <p className="places">10 Places &#10151;</p>
                        </div>

                        <div className="item">
                            <img src="https://b.zmtcdn.com/data/collections/bb455325350e11bff99e88ef68b3f89d_1614940676.jpg?output-format=webp" alt="" />
                            <p className="img-title">Meet Cravings</p>
                            <p className="places">19 Places &#10151;</p>
                        </div>

                    </div>




                </div>
            </div>


            <div className="container">
                <div className="btn-area">
                    <Button />
                </div>
            </div>

            <div className="container">
                <Dinning/>
            </div>

        </>
  )
}

export default Dining