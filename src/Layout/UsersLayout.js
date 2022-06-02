import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router'

const UsersLayout = () => {
  const [isLogin,setLogin] = useState(true)

  


  return (
    <>
     {
     isLogin ?  (<div>UsersLayout : {<Outlet />}</div>) : <Navigate to="/admin/login" />
   }
    </>
  )
}

export default UsersLayout