import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar'
import UpperNavbar from '../Components/UpperNavbar'

const AdminLayout = () => {
  return (
<>
          
   <div className='flex  overflow-y-hidden'>
     <div className="w-1/6">
     <Sidebar />
     </div>
     <div className="w-5/6 bg-custom-200 overflow-y-auto  h-screen"> 
     <UpperNavbar />

        <div className="  mt-20">
        <Outlet />
        </div>
     </div>
   </div>
</>
  )
}

export default AdminLayout