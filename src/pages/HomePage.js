import React from 'react';
import Header from '../components/Header';
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import lungSvg from '../assets/heart-lung-svgrepo-com.svg';
import heartSvg from '../assets/heart-doctor-svgrepo-com.svg';
import brainSvg from '../assets/brain-svgrepo-com.svg';
import teethSvg from '../assets/dentist-tooth-svgrepo-com.svg';
import coldSvg from '../assets/cold-hat-scarf-svgrepo-com.svg';
import feverSvg from '../assets/fever-male-svgrepo-com.svg';
import headacheSvg from '../assets/headache-woman-svgrepo-com.svg';
import "./HomePage.css";

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
            items: 3.3,
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

    const resp3 = {
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
            items: 1.4,
            slidesToSlide: 1
        }
    };

    const resp4 = {
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
            items: 2.3,
            slidesToSlide: 1
        }
    };
    
    const carStyle2 = "rounded-md px-2 pt-2 mx-1 flex flex-col gap-3 items-center h-32 bg-slate-200 text-black nice-font"

    return (
        <div>
            <Header/>
            <div className='rounded-b-2xl'>
            <div className='flex flex-1 justify-between items-center text-black'>
                <div className='px-5 py-5'>
                    <div className='text-xl nice-font'>Find Your</div>
                    <div className='text-3xl font-semibold nice-font'>Specialist</div>
                </div>
                <div className='text-3xl px-5 flex gap-3'>
                    <Link to="/search"><AiOutlineSearch/></Link>
                    <Link><MdLocationOn/></Link>
                </div>
            </div>

            <Carousel
                className='bg-slate-200'
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

                <div className='flex flex-col items-center bg-slate-200'>
                    <img className='h-52 w-full' src={require("../assets/ad1.png")}/>
                </div>
                <div className='flex flex-col items-center bg-slate-200'>
                    <img className='h-52 w-full' src={require("../assets/ad2.png")}/>
                </div>
                <div className='flex flex-col items-center bg-slate-200'>
                    <img className='h-52 w-full' src={require("../assets/ad3.png")}/>
                </div>
                <div className='flex flex-col items-center bg-slate-200'>
                    <img className='h-52 w-full' src={require("../assets/ad4.png")}/>
                </div>
            </Carousel>
            </div>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-xl font-semibold nice-font'>Categories</div>
                <div className='font-semibold text-blue-600 nice-font'><Link to='/doctors'>View All</Link></div>
            </div>

            <Carousel
                className='py-1 ml-2'
                showDots={false}
                responsive={resp1}
                ssr={true}
                draggable={true}
                swipeable={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                
                <div className={`${carStyle2}`}>
                    <img src={lungSvg} className='w-20 h-20'/>
                    <div className='text-base font-semibold relative'>Neprologist</div>
                </div>
                <div className={carStyle2}>
                    <img src={heartSvg} className='w-20 h-20'/>
                    <div className='text-base font-semibold relative'>Cardiogist</div>
                </div>
                <div className={carStyle2}>
                    <img src={brainSvg} className='w-20 h-20'/>
                    <div className='text-base font-semibold relative'>Neurologist</div>
                </div>
                <div className={carStyle2}>
                    <img src={teethSvg} className='w-20 h-20'/>
                    <div className='text-base font-semibold relative'>Dentist</div>
                </div>
            </Carousel>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-xl font-semibold nice-font'>Common Health Issues</div>
                <div className='font-semibold text-blue-600 nice-font'><Link to='/doctors'>View All</Link></div>
            </div>

            <Carousel
                className='py-1'
                showDots={false}
                responsive={resp3}
                ssr={true}
                draggable={true}
                swipeable={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                
                <div className='ml-4 px-2 py-2 h-24 w-64 bg-[#19376D] rounded-md text-white'>
                    <div className='text-xl font-semibold nice-font'>Physical Activity And Nutrition</div>
                    <div className='text-base py-1 nice-font'>loren ipsum is simply dummy text</div>
                </div>

                <div className='mx-2 px-2 py-2 h-24 w-64 bg-[#088395] rounded-md text-white'>
                    <div className='text-xl font-semibold nice-font'>Obesity And <br/> Weight</div>
                </div>
            </Carousel>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-xl font-semibold nice-font'>Symptoms</div>
                <div className='font-semibold text-blue-600 nice-font'><Link to='/doctors'>View All</Link></div>
            </div>

            <Carousel
                className='py-1'
                showDots={false}
                responsive={resp4}
                ssr={true}
                draggable={true}
                swipeable={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                
                <div className='ml-4 px-2 py-2 h-12 w-36 rounded-md text-center bg-gray-100 flex gap-3 items-center'>
                    <img src={coldSvg} className='w-10 h-8'/>
                    <div className='text-xl font-semibold text-black nice-font'>Cold</div>
                </div>

                <div className=' px-2 py-2 h-12 w-40 rounded-md text-center bg-gray-100 flex gap-3 items-center'>
                    <img src={feverSvg} className='w-10 h-8'/>
                    <div className='text-xl font-semibold text-black nice-font'>Fever</div>
                </div>

                <div className=' px-2 py-2 h-12 w-40 rounded-md text-center bg-gray-100 flex gap-3 items-center'>
                    <img src={headacheSvg} className='w-10 h-8'/>
                    <div className='text-xl font-semibold text-black nice-font'>Headache</div>
                </div>
            </Carousel>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-2xl font-semibold'>Available Doctors</div>
                <div className='font-semibold text-blue-600'><Link to='/doctors'>View All</Link></div>
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
                
                <div className='h-full ml-3 bg-slate-100 rounded-md flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-600'>Dr. XYZ</p>
                    <div className='w-full flex flex-1 justify-between items-center mt-2'>
                        <img className='w-20 h-20 rounded-sm mt-1' src={require("../assets/doc.png")}/>
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
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>

                <div className='h-full ml-3 rounded-md bg-slate-100 flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-600'>Dr. XYZ</p>
                    <div className='w-full flex flex-1 justify-between items-center mt-2'>
                        <img className='w-20 h-20 rounded-sm mt-1' src={require("../assets/doc.png")}/>
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
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>
            </Carousel>

            <div className='mt-5 py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-2xl font-semibold'>Available Pharmacies</div>
                <div className='font-semibold text-blue-600'><Link to='/doctors'>View All</Link></div>
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
                
                <div className='h-full ml-3 bg-slate-100 rounded-md flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-600'>Dr. XYZ</p>
                    <div className='w-full flex flex-1 justify-between items-center mt-2'>
                        <img className='w-20 h-20 rounded-sm mt-1' src={require("../assets/doc.png")}/>
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
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>

                <div className='h-full ml-3 bg-slate-100 rounded-md flex flex-col items-center px-3 py-3'>
                    <p className='py-2 font-semibold text-xl text-blue-600'>Dr. XYZ</p>
                    <div className='w-full flex flex-1 justify-between items-center mt-2'>
                        <img className='w-20 h-20 rounded-sm mt-1' src={require("../assets/doc.png")}/>
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
                    <button className='px-5 py-2 w-max bg-blue-600 font-semibold text-white text-xl rounded-md mt-5'>Book Appointment Now</button>
                </div>
            </Carousel>
        </div>
    )
};

export default HomePage;
