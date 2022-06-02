import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import dropdown from "../assets/iconSidebar/dropdown.svg";


const SidebarItems = ({ isDropdown, icon, linkTo, title, child }) => {
    const [dropOpen, setDropOpen] = useState(false)

    return (
        <>
            {
                isDropdown ?
                    <>
                        <div className="text-md text-custom-300 cursor-pointer mt-5 flex " onClick={() => setDropOpen(!dropOpen)}>
                            <div className="w-1/6 mr-2">
                                <img src={icon} alt="book" />
                            </div>
                            <div className="w-4/6 font-bold">{title}</div>
                            <div className="w-1/6 flex items-center">
                                <img src={dropdown} alt="dropdown" className={dropOpen ? 'w-5 ' : 'w-5 rotate-180'} />
                            </div>
                        </div>

                        {/* child  */}

                        {
                            dropOpen ?
                                <div className="transition duration-300 text-custom-300">
                                    {
                                          child?.map((childs) => (
                                            <Link to={childs.linkTo} className="flex mt-3.5 items-center">
                                                <span className=" bg-custom-300 w-1 h-1 mr-2 rounded-full ml-1"></span>
                                                <div className="w-4/6">
                                                    <p className="text-sm ">{childs?.title}</p>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>  
                            : ''
                        }

                    </>
                    :
                    <Link to={linkTo} className="text-md font-bold mt-5 flex ">
                        <div className="w-1/6 mr-2">
                            <img src={icon} alt="book" />
                        </div>
                        <div className="w-4/6 text-custom-300">{title}</div>
                        <div className="w-1/6 flex items-center"></div>
                    </Link>
            }
        </>
    )
}

export default SidebarItems
