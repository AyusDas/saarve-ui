import React from 'react';
import Header from '../components/Header';
import { FaStar, FaVideo } from 'react-icons/fa';
import { BiBookmark, BiMessage } from "react-icons/bi";
import { MdLocationOn, MdCall } from "react-icons/md";
import { useState } from 'react';

const DoctorBooking = () => {
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    
    const openClose = (n) => {
        switch(n) {
            case 1: setOpen1(true)
                    setOpen2(false)
                    setOpen3(false)
                    setOpen4(false)
                    break
            case 2: setOpen2(true)
                    setOpen1(false)
                    setOpen3(false)
                    setOpen4(false)
                    break
            case 3: setOpen3(true)
                    setOpen1(false)
                    setOpen2(false)
                    setOpen4(false)
                    break
            case 4: setOpen4(true)
                    setOpen1(false)
                    setOpen2(false)
                    setOpen3(false)
                    break
    }
}

    return (
        <div>
            <Header/>
            <div className='mt-2 w-full h-max pt-2 flex flex-col items-center'>
                <img src={require('../assets/doc.png')} className='w-80 h-80'/>
                <div className='font-semibold text-2xl mt-3'>Dr. ABCD</div>
                <div className='text-xl text-[#555555]'>BDS,MDS -Oral Surgery</div>
                <div className='text-xl text-[#555555]'>DENTIST</div>
                <div className='mt-2 flex flex-1 gap-2 items-center'>
                    <span><FaStar className='text-yellow-400 text-xl'/></span>
                    <span><FaStar className='text-yellow-400 text-xl'/></span>
                    <span><FaStar className='text-yellow-400 text-xl'/></span>
                    <span><FaStar className='text-yellow-400 text-xl'/></span>
                    <span><FaStar className='text-yellow-400 text-xl'/></span>
                    <span className='font-semibold text-xl'>(35)</span>
                </div>
                <div className='mt-2 flex flex-1 gap-2 items-center text-xl text-[#555555]'>
                    <span><MdLocationOn/></span>
                    <span>Newyork, USA - <span className='text-[#3be7b1]'>Get Directions</span></span>
                </div>
                <div className='mt-3 flex flex-1 gap-3 items-center justify-evenly w-1/2'>
                    <span><BiBookmark className='text-2xl'/></span>
                    <span><BiMessage className='text-2xl'/></span>
                    <span><MdCall className='text-2xl'/></span>
                    <span><FaVideo className='text-2xl'/></span>
                </div>
                <div className='w-4/5'>
                    <input className='py-3 mt-5 w-full tracking-wider rounded-md px-1 bg-blue-700 text-white font-semibold text-xl' value="BOOK APPOINTMENT" type='button'/>
                </div>
                <div className='mt-5 text-xl font-semibold border border-[#d0d0d0] rounded-md w-4/5 text-center'>
                    <ul>
                        <li className={`py-2 ${open1 ? 'text-blue-600 bg-[#efefefbc]':''}`} onClick={()=>openClose(1)}>Overview</li>
                        <hr className='w-full'/>
                        <li className={`py-2 ${open2 ? 'text-blue-600 bg-[#efefefbc]':''}`} onClick={()=>openClose(2)}>Location</li>
                        <hr className='w-full'/>
                        <li className={`py-2 ${open3 ? 'text-blue-600 bg-[#efefefbc]':''}`} onClick={()=>openClose(3)}>Reviews</li>
                        <hr className='w-full'/>
                        <li className={`py-2 ${open4 ? 'text-blue-600 bg-[#efefefbc]':''}`} onClick={()=>openClose(4)}>Business Hours</li>
                    </ul>
                </div>
                <div className={`w-4/5 mt-3 ${open1 ? '' : 'hidden'}`}>
                    <div className='text-2xl font-semibold py-3'>Overview</div>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet sed orci eget pretium. Phasellus lacinia auctor tincidunt. Morbi sed eros nec magna condimentum mollis nec ac urna. Aenean vehicula eget dui in pellentesque.
                    </p>
                </div>
                <div className={`w-4/5 mt-3 ${open4 ? '' : 'hidden'}`}>
                    <div className='text-2xl font-semibold py-3'>Bussiness Hours</div>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet sed orci eget pretium. Phasellus lacinia auctor tincidunt. Morbi sed eros nec magna condimentum mollis nec ac urna. Aenean vehicula eget dui in pellentesque.
                    </p>
                </div>
                <div className={`w-4/5 mt-3 ${open3 ? '' : 'hidden'}`}>
                    <div className='text-2xl font-semibold py-3'>Review</div>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet sed orci eget pretium. Phasellus lacinia auctor tincidunt. Morbi sed eros nec magna condimentum mollis nec ac urna. Aenean vehicula eget dui in pellentesque.
                    </p>
                </div>
                <div className={`w-4/5 mt-3 ${open2 ? '' : 'hidden'}`}>
                    <div className='text-2xl font-semibold py-3'>Location</div>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet sed orci eget pretium. Phasellus lacinia auctor tincidunt. Morbi sed eros nec magna condimentum mollis nec ac urna. Aenean vehicula eget dui in pellentesque.
                    </p>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default DoctorBooking;
