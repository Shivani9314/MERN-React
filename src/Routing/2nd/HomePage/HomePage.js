import React from 'react'
import logo from '../icons/zomato.avif'
import locate from '../icons/placeholder.png'
import search_icon from '../icons/search.png'


function HomePage() {
  return (

    <nav>
        <img className='logo' src={logo} alt="" />
        <div className='search-area'>
            <img className='location' src={locate} alt="" />
            <select>
                <option value="">Jabalpur</option>
                <option value="">Delhi Ncr</option>
                <option value="">Others</option>
            </select>
            <span className="line">|</span>
            <img className='search' src= {search_icon} alt="" />
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
        </div>
        <div className="login-logout">
                <span className="Login">Log in</span>
                <span className="signup">Sign up</span>
        </div>
    </nav>
  )
}

export default HomePage