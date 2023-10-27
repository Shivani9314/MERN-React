import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import './Login.css';

function Login() {

    const navigate = useNavigate();




  return (
    <div className='Container'>
        <input type="text"/>
        <input type="password"  />
        <button onClick={() => navigate('/logout')}>Login</button>
    </div>
  )
}

export default Login;