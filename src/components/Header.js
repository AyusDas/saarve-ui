import React from 'react';
import {Link} from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiStethoscopeLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";

const Header = () => {

    return (
        <header>
            <ul className='flex flex-1 gap-3 justify-center text-xl font-semibold py-5 bg-[#f1f1f19b]'>
                <CustomLink to="/home" title="Home">
                    <AiFillHome/>
                </CustomLink>
                <CustomLink to="/doctors" title="Doctor">
                    <RiStethoscopeLine/>
                </CustomLink>
                <CustomLink to="/notifications" title="Notifications">
                    <IoIosNotifications/>
                </CustomLink>
                <CustomLink to="/menu" title="Menu">
                    <AiFillAppstore/>
                </CustomLink>
            </ul>
        </header>
    )
}

export default Header;

function CustomLink({ to,children, title, ...props }) {
    const path = window.location.pathname
    return (
        <li className={`flex flex-1 items-center gap-3 justify-center ${ path===to ? "text-blue-600":"" }`}>
            <Link to={to} className="flex flex-1 items-center gap-2 justify-center" {...props}>
                {children}
                <p className={ path === to ? "" : "hidden"}>{title}</p>
            </Link>
        </li>
    )
}
