import React from 'react'
import Header from '../components/Header';
import { Link } from "react-router-dom";
import { BsFillBookmarksFill, BsPersonSquare, BsAlarm } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut, BiTransferAlt, BiHelpCircle } from "react-icons/bi";
import { RiHistoryLine } from "react-icons/ri";
import 'react-multi-carousel/lib/styles.css';
import boySvg from '../assets/boy-svgrepo-com.svg';
import './HomePage.css';

const MenuPage = () => {
    const liClass = "py-5 px-5 text-xl flex flex-1 gap-3 items-center text-blue-600 font-semibold nice-font"
    return (
        <div>
            <Header/>
            <div>
                <ul>
                    <li className='flex gap-3 py-3 px-3 items-center'>
                        <img src={boySvg} className='w-16 h-16 rounded-full' />
                        <div className='px-3 font-semibold text-xl nice-font'>
                            Harish Kumar<br/>
                            <Link className='text-blue-600 font-semibold nice-font'to='/'>
                                View Profile
                            </Link>
                        </div>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BsPersonSquare/>
                        <Link className='text-black'>Consult A Doctor</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BsFillBookmarksFill />
                        <Link className='text-black'>Book A Test</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <FaUserCircle />
                        <Link className='text-black'>Appointments</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <AiFillSetting />
                        <Link className='text-black'>Medical Records</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <RiHistoryLine/>
                        <Link className='text-black'>Saved Doctors</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BiTransferAlt/>
                        <Link className='text-black'>Transactions</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BsAlarm />
                        <Link className='text-black'>Reminders</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BiHelpCircle />
                        <Link className='text-black'>Help</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <AiFillSetting />
                        <Link className='text-black'>Settings</Link>
                    </li>
                    <hr/>
                    <li className={liClass}>
                        <BiLogOut />
                        <Link className='text-black'>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuPage;
