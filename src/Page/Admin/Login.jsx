import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


const Login = () => {
  const navigate = useNavigate()

  const LoginHandle = () => {
    localStorage.setItem('logins',JSON.stringify({isLogin: true}));
    navigate('/admin/dashboard')
  }

  useEffect(() => {
    if(localStorage.getItem('logins')){
      navigate('/admin/dashboard')
    }
  },[])

  return (
    <div className='mx-auto w-1/6 border border-blue-500 p-4 text-center flex flex-col mt-6'>
      <h1 className="text-xl text-blue-500 ">Login panel</h1>
      <button className='my-3 border border-blue-500 p-2 mx-auto text-red-500 rounded-lg' onClick={LoginHandle} >Login</button>
      <Link to="/"  className=' text-blue-500 mt-2'>home</Link>
    </div>
  )
}

export default Login