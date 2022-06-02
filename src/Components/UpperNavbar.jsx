import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import graphUp from '../assets/iconSidebar/dropdown.svg'
import Profile from '../assets/navbar/profile.jpg'

const UpperNavbar = () => {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('logins')
    navigate('/admin/login')
  }


  return (
    <>
      <div className="px-8 py-3 flex justify-between fixed bg-white w-full shadow-sm">
        <div className="">
          <h2 className="text-xl font-bold">Dashboard</h2>
          {/* <p className='mt-2 text-md text-custom-400'>Welcome to CMS Dashboard</p> */}
        </div>
        <div className="w-2/6 flex items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
          <img src={Profile} alt="profile" className='object-cover rounded-full w-1/12 h-8' />
          <div className="flex items-center ml-3 w-full h-8">
            <p className="text-base">Faldi Ramadhan</p>
          </div>
        </div>
      </div>
      {
        toggle ? <div className="fixed right-12 top-14 p-3 text-xs cursor-pointer rounded-b-xl font-bold bg-red-500 text-white" onClick={logout}>Logout</div>
          : ''
      }

    </>
  )
}

export default UpperNavbar