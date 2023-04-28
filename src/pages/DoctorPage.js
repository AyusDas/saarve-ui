import React from 'react'
import Header from '../components/Header';
import { FaStar } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const DoctorPage = () => {
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
                    <div className='w-full flex flex-1 justify-between items-center mt-2'>
                        <img className='w-24 h-24 rounded-sm' src={require("../assets/doc.png")}/>
                        <div className='h-fit flex flex-col items-start mt-2'>
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
                        <button className='bg-blue-600 px-5 py-1 font-semibold text-white text-xl h-12 rounded-md w-5/6'>
                            Book Appointment Now
                        </button>
                    </div>
                </div>

                <div className='h-1/3 mx-3 mt-5 rounded-md flex flex-col items-center px-3 py-3 bg-white shadow-lg'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. ABC</p>
                    <div className='w-full px-3 flex flex-1 justify-between items-center mt-2'>
                        <img className='w-24 h-24 rounded-sm' src={require("../assets/doc.png")}/>
                        <div className='h-fit flex flex-col items-start mt-2'>
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
                    <div className='flex flex-1 gap-3 w-full justify-center items-center my-2'>
                        <button className='bg-blue-600 px-5 py-1 font-semibold text-white text-xl h-12 rounded-md w-5/6'>
                            <Link to='/doctorbooking'>Book Appointment Now</Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DoctorPage;
