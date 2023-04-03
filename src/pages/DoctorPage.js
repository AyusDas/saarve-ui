import React, { useState } from 'react'
import Header from '../components/Header';
import { FaStar } from 'react-icons/fa';
import { MdSchedule } from "react-icons/md";

const DoctorPage = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
        <div>
            <Header/>
            <div className='bg-[#E6EFF9] h-screen'>
                <section className='flex flex-1 items-center w-full py-5'>
                    <div className='text-2xl font-semibold w-full ml-3'>
                        Available Doctors
                    </div>
                </section>

                <div className='h-1/3 mx-3 mt-3 rounded-md flex flex-col items-center px-3 py-3 bg-white shadow-lg'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. XYZ</p>
                    <div className='w-full flex flex-1 justify-evenly items-center mt-2'>
                        <img className='w-20 h-20 rounded-full' src={require("../assets/doc.png")}/>
                        <div className='h-fit flex flex-col items-end mt-2'>
                            <div className='flex flex-1 gap-2'>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                            </div>
                            <div className='font-semibold text-lg'>Medicines</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <div className='flex flex-1 gap-3 w-full justify-center items-center'>
                        <button className='bg-blue-600 px-5 py-1 font-semibold text-white text-xl h-10 rounded-md'>
                            Book Now
                        </button>
                        <button className='bg-[#ec215a] h-10 w-10 flex flex-col items-center rounded-md' onClick={()=>setOpen1(!open1)}>
                            <MdSchedule className='text-white font-bold text-3xl mt-1'/>
                        </button>
                    </div>
                    <div className={`w-full ${ open1 ? "" : "hidden"}`}>
                        <hr/>
                        <div className='pt-5 px-2 w-full flex flex-wrap gap-3'>
                            <p className='bg-blue-600 text-base text-white font-semibold px-2 py-1 rounded-md'>Mon 18:00 </p>
                            <p className='bg-blue-600 text-base text-white font-semibold px-2 py-1 rounded-md'>Tue 20:00</p>
                        </div>
                    </div>
                </div>

                <div className='h-1/3 mx-3 mt-5 rounded-md flex flex-col items-center px-3 py-3 bg-white shadow-lg'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. ABC</p>
                    <div className='w-full px-3 flex flex-1 justify-evenly items-center mt-2'>
                        <img className='w-20 h-20 rounded-full' src={require("../assets/doc.png")}/>
                        <div className='h-fit flex flex-col items-end mt-2'>
                            <div className='flex flex-1 gap-2'>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                                <span><FaStar className='text-yellow-400'/></span>
                            </div>
                            <div className='font-semibold text-lg'>Neurosurgeon</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <div className='flex flex-1 gap-3 w-full justify-center items-center'>
                        <button className='bg-blue-600 px-5 py-1 font-semibold text-white text-xl h-10 rounded-md'>
                            Book Now
                        </button>
                        <button className='bg-[#ec215a] h-10 w-10 flex flex-col items-center rounded-md' onClick={() => setOpen2(!open2)}>
                            <MdSchedule className='text-white font-bold text-3xl mt-1'/>
                        </button>
                    </div>
                    <div className={`w-full ${ open2 ? "" : "hidden"}`}>
                        <hr/>
                        <div className='pt-5 px-2 w-full flex flex-wrap gap-3'>
                            <p className='bg-blue-600 text-base text-white font-semibold px-2 py-1 rounded-md'>Mon 18:00 </p>
                            <p className='bg-blue-600 text-base text-white font-semibold px-2 py-1 rounded-md'>Tue 20:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorPage;
