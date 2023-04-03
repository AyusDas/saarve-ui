import React from 'react';
import Header from '../components/Header';
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GiPillDrop, GiBrain, GiChemicalDrop } from "react-icons/gi";
import { RiWomenLine } from "react-icons/ri";
import { FaHeartbeat, FaTeeth } from "react-icons/fa";
import { TbPhysotherapist, TbBone } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomePage = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const resp1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5,
            slidesToSlide: 1
        }
    };

    const resp2 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 2 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.3,
            slidesToSlide: 1
        }
    };
    
    const carStyle2 = "rounded-md px-2 mx-2 flex flex-1 items-center justify-center h-full"

    return (
        <div>
            <Header/>

            <div className='flex flex-1 justify-between items-center bg-white'>
                <div className='px-5 py-5'>
                    <div className='text-xl'>Find Your</div>
                    <div className='text-3xl font-semibold'>Specialist</div>
                </div>
                <div className='text-3xl px-5 flex gap-3'>
                    <Link to="/search"><AiOutlineSearch/></Link>
                    <Link><MdLocationOn/></Link>
                </div>
            </div>

            <Carousel
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">

                <div className='flex flex-col items-center rounded-sm'>
                    <img className='h-52 w-full' src={require("../assets/ad1.png")}/>
                </div>
                <div className='flex flex-col items-center rounded-sm'>
                    <img className='h-52 w-full' src={require("../assets/ad2.png")}/>
                </div>
                <div className='flex flex-col items-center rounded-sm'>
                    <img className='h-52 w-full' src={require("../assets/ad3.png")}/>
                </div>
                <div className='flex flex-col items-center rounded-sm'>
                    <img className='h-52 w-full' src={require("../assets/ad4.png")}/>
                </div>
            </Carousel>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-xl font-semibold'>Categories</div>
                <div><Link to='/doctors'>see all</Link></div>
            </div>

            <Carousel
                showDots={false}
                responsive={resp1}
                ssr={true}
                draggable={true}
                swipeable={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                
                <div className={carStyle2}>
                    <GiPillDrop className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <FaHeartbeat className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <TbPhysotherapist className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <GiBrain className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <GiChemicalDrop className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <FaTeeth className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <RiWomenLine className='text-3xl'/>
                </div>
                <div className={carStyle2}>
                    <TbBone className='text-3xl'/>
                </div>  
            </Carousel>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-2xl font-semibold'>Available Doctors</div>
                <div><Link to='/doctors'>see all</Link></div>
            </div>

            <Carousel
                showDots={false}
                responsive={resp2}
                ssr={true}
                draggable={true}
                swipeable={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                
                <div className='h-full ml-3 border border-gray-400 rounded-sm flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. XYZ</p>
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
                            <div className='font-semibold text-lg'>Medicines</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>
                
                <div className='h-full border border-gray-400 ml-3 rounded-sm flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. XYZ</p>
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
                            <div className='font-semibold text-lg'>Medicines</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>

                <div className='h-full border border-gray-400 ml-3 rounded-sm flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. XYZ</p>
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
                            <div className='font-semibold text-lg'>Medicines</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>

                <div className='h-full border border-gray-400 ml-3 rounded-sm flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. XYZ</p>
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
                            <div className='font-semibold text-lg'>Medicines</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>

                <div className='h-full border border-gray-400 ml-3 rounded-sm flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-700'>Dr. XYZ</p>
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
                            <div className='font-semibold text-lg'>Medicines</div>
                            <div><span className='font-semibold px-1'>5</span>years Experience</div>
                            <div className='text-lg'><span className='font-semibold px-1'>2.7K</span>Patients</div>
                        </div>
                    </div>
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>

            </Carousel>
        </div>
    )
};

export default HomePage;

