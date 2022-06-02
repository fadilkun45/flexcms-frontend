import React from 'react'
import { Link } from 'react-router-dom'

const CardListBlog = ({ img, title, date, category }) => {

    return (
        <div className="flex justify-between mb-3">
            <div className="w-6/12 p-3.5 flex justify-around flex items-center">
                <img src={img} alt="thumb" className='w-3/12 object-cover rounded-full' />
                <h2 className="text-custom-600 w-8/12 text-sm ">{title?.length > 70 ? title?.slice(0,70) + '...' : title}</h2>
            </div>

            <div className="w-2/12  text-custom-600 flex flex-col ">
                {
                    category?.slice(0, 2)?.map((categories) => (<div className="text-center bg-custom-500 rounded-full px-3.5 py-2 text-xs mb-2">{categories}</div>))
                }
                {
                    category?.length > 2 ? <div className="text-center bg-custom-500 rounded-full px-3.5 py-2 text-xs mb-2">+{category?.length - 2}</div> : ''

                }
            </div>

            <div className="w-2/12 p-3.5 text-custom-600 flex items-center text-sm">{date}</div>

            <div className="w-2/12 text-custom-600 flex items-center ">
                <Link to="#" className="text-center bg-custom-500 rounded-full px-3 py-2 mb-2 text-xs">view</Link>
                <button to="#" className="text-center bg-custom-500 rounded-full px-3 py-2 mb-2 ml-2 text-xs">Edit</button>
            </div>
        </div>
    )
}

export default CardListBlog