import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function PrivateComponent() {
    let data =localStorage.getItem("user");
  return (
   data?<Outlet/>:<Navigate to="/signup" />
  )
}

export default PrivateComponent