import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    
    const isLoggedIn = false;

  return (
    <div>
        {isLoggedIn ? <Outlet/> : Navigate('/login')}
    </div>
  )
}

export default ProtectedRoute