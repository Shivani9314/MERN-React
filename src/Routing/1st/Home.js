import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Hello Guys</h1>
        <nav>
         <Link to= "/login">Login</Link>
         <Link to= "/signup">Sigup</Link>
        </nav>
    </div>
  )
}

export default Home