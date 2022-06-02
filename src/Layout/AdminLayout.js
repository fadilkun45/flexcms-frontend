import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar'
import UpperNavbar from '../Components/UpperNavbar'

const AdminLayout = () => {
  return (
<>
          
   <div className='flex h-screen overflow-y-hidden'>
     <div className="w-1/6">
     <Sidebar />
     </div>
     <div className="w-5/6 bg-custom-200 "> 
     <UpperNavbar />

        <div className=" overflow-y-auto">
        <Outlet />
        </div>
     </div>
   </div>
</>
  )
}

export default AdminLayout