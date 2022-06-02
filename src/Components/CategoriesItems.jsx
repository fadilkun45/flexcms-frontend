import React from 'react'

const CategoriesItems = ({title,amount}) => {
    return (
        <div className="flex flex-col mt-6 ">
            <div className="flex justify-between items-center">
                <p className="text-custom-600">{title}</p>
                <p className='text-sm px-3.5 py-2 text-custom-300 rounded-2xl bg-custom-500'>{amount} Artikel</p>
            </div>
        </div>
    )
}

export default CategoriesItems