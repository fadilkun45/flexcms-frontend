import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = ({children}) => {
  return (
<>
          
   <div>
       <p className='text-center mb-2'>Ini Admin Layout : </p>
       {<Outlet />}
   </div>
</>
  )
}

export default AdminLayout