import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";
import home from "../assets/iconSidebar/home.svg";
import book from "../assets/iconSidebar/book.svg";
import settings from "../assets/iconSidebar/settings.svg";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {

    const articleChild = [
        {
            linkTo: '#',
            title: 'All Article'
        },
        {
            linkTo: '#',
            title: 'Buat Artikel'
        },
        {
            linkTo: '#',
            title: 'Kategori'
        },
    ]

    const SettingsChild = [
        {
            linkTo: '#',
            title: 'Akun Setting'
        },
        {
            linkTo: '#',
            title: 'Website Setting'
        },
    ]


    return (
        <div className="w-full px-6 py-4 bg-white h-screen">
            <div className="w-6/8">
                <img src={Logo} alt="logo" />
            </div>
            <div className="mt-5 flex flex-col">

                <SidebarItems isDropdown={false} icon={home} linkTo={'#'} title={'Dashboard'} />


                <SidebarItems isDropdown={true} icon={book} linkTo={'#'} title={'Article'} child={articleChild} />

                <SidebarItems isDropdown={true} icon={settings} linkTo={'#'} title={'settings'} child={SettingsChild} />

                <Link
                    to=""
                    className="text-sm  mt-6 py-1 rounded-xl text-center text-white bg-custom-100"
                >
                    tulis Artikel
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
