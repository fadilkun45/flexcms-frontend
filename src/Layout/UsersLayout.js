import React from 'react'
import { Outlet } from 'react-router'

const UsersLayout = () => {
  return (
    <div>UsersLayout : {<Outlet />}</div>
  )
}

export default UsersLayout