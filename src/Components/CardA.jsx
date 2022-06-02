import React from 'react'

const CardA = ({icon,title,amount}) => {
  return (
    <div className="bg-white rounded-md flex justify-around px-5 py-4 ">
    <div className="w-2/6">
      <img src={icon} alt="graph" />
    </div>
    <div className="w-3/6">
      <h2 className="text-lg font-bold">{amount}</h2>
      <p className="mt-2 text-md text-custom-400">{title}</p>
    </div>

  </div>
  )
}

export default CardA