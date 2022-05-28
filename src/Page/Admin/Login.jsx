import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mx-auto w-1/6 border border-blue-500 p-4 text-center'>
      <h1 className="text-xl text-blue-500 ">Login panel</h1>
      <Link to="/"  className=' text-blue-500 mt-2'>home</Link>
    </div>
  )
}

export default Login