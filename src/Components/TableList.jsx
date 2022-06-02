import React from 'react'
import { Link } from 'react-router-dom'
import graphUp from '../assets/Dashboard/graphUp.svg'
import search from '../assets/Dashboard/search.svg'
import Arrow from '../assets/iconSidebar/dropdown.svg'
import CardListBlog from './CardListBlog'


const TableList = () => {

    const category = ['makar','turu','ngocok']
    const category2 = ['reactjs','js']




    return (
        <div className=''>
            <div className="flex justify-between">

                <div className="flex flex-col w-3/12">
                    <h4 className="text-xl font-bold mb-2">Artikel</h4>
                    <p className="text-custom-400">100 Artikel</p>
                </div>

                <div className="w-10/12 flex justify-between h-12">

                    <div className="w-6/12 flex bg-custom-500 rounded-full px-6 items-center">
                        <img src={search} alt="kaca" className='mr-2' />
                        <input type="text" className='w-4/6 text-custom-400 bg-custom-500 outline-none' placeholder='Cari disini' />
                    </div>

                    <div className="w-6/12 ml-2 flex rounded-full px-6 ">
                        <select name="" id="" className='bg-custom-500  cursor-pointer rounded-l-3xl outline-none w-full h-full appearance-none'>
                            <option value="tes" className='text-center'>tes</option>
                            <option value="tes" className='text-center'>tes</option>
                        </select>
                        <div className="w-4/6 bg-custom-500 flex items-center  rounded-r-3xl"  >
                            <img src={Arrow} alt="arrow" className='w-full h-4' />
                        </div>
                    </div>

                </div>

            </div>

            <div className="w-full flex flex-col mt-2.5 bg-white rounded-lg">
                <div className="flex justify-between">
                    <div className="w-6/12 p-3.5 text-custom-400 uppercase text-sm">Artikel</div>
                    <div className="w-2/12 p-3.5 text-custom-400 uppercase text-sm">Kategori</div>
                    <div className="w-2/12 p-3.5 text-custom-400 uppercase text-sm">Tanggal</div>
                    <div className="w-2/12 p-3.5 text-custom-400 uppercase text-sm">Action</div>
                </div>
            </div>

            <div className="w-full flex flex-col mt-2.5 bg-white rounded-lg h-screen overflow-y-auto">
               
                <CardListBlog img={graphUp} date={'17/02/2022'} title={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nesciunt?'} category={category} />

                <CardListBlog img={graphUp} date={'17/02/2022'} title={'cara membuat website menggunakan jawa'} category={category2} />
            
                <CardListBlog img={graphUp} date={'17/02/2022'} title={'sundaScript The powered programming Language than JS'} category={category2} />

                <CardListBlog img={graphUp} date={'17/02/2022'} title={'sundaScript The powered programming Language than JS'} category={category2} />

            </div>
        </div>
    )
}

export default TableList