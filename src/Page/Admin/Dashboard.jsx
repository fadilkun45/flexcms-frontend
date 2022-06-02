import React from 'react'
import graphUp from '../../assets/Dashboard/graphUp.svg'
import bookIcon from '../../assets/Dashboard/bookIcon.svg'


import CardA from '../../Components/CardA'
import { Link } from 'react-router-dom'
import CategoriesItems from '../../Components/CategoriesItems'
import TableList from '../../Components/TableList'


const Dashboard = () => {
  return (
    <div className="w-full h-screen px-8 py-3 mt-6">
      <div className="flex justify-between mt-12">
        <div className="flex flex-col w-8/12 ">

          <div className="grid grid-cols-2 gap-6">
            <CardA title={'Total Kunjungan'} icon={graphUp} amount={'2,456'} />
            <CardA title={'Total Artikel'} icon={bookIcon} amount={'100'} />
          </div>

          <div className="flex mt-6 py-8 px-3 flex-col bg-white ">

            <TableList />




          </div>



        </div>


        <div className="flex flex-col w-3/12">
          <div className="bg-custom-700 flex p-5 justify-between rounded-xl mb-6">
            <h1 className="font-bold text-white text-lg">Tulis Artikel</h1>
            <Link to="#" className='text-xs p-2 bg-white rounded-full '>Tulis Sekarang</Link>
          </div>

          <div className="p-8 bg-white rounded-xl flex flex-col">
            <h2 className="font-bold text-xl text-custom-800">kategori</h2>
            <div className=" flex flex-col">
              <CategoriesItems title={'teknologi'} amount={10} />
              <CategoriesItems title={'makar'} amount={20} />
              <CategoriesItems title={'turu'} amount={1} />
              <CategoriesItems title={'elaina'} amount={100} />
            </div>
            <Link to="#" className='mt-6 bg-custom-700 text-white py-2 px-2 rounded-full text-center w-5/6 text-sm '>Tambah Kategori</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard