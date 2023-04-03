import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";
import { BsFillBookmarksFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";

const MenuPage = () => {
    const liClass = "py-5 px-5 text-xl flex flex-1 gap-3 items-center text-blue-700 font-semibold"
    return (
        <div>
            <Header/>
            <div>
                <ul>
                    <li className={liClass}>
                        <MdCategory />
                        <Link>Categories</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BsFillBookmarksFill />
                        <Link>My Appointments</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <FaUserCircle />
                        <Link>Profile</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <AiFillSetting />
                        <Link>Settings</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <RiHistoryLine/>
                        <Link>History</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BiLogOut />
                        <Link>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuPage;

