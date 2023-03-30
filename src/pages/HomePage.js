import React from 'react'
import Header from '../components/Header';
import { FcSearch } from "react-icons/fc";
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
            items: 4,
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
            items: 2,
            slidesToSlide: 1
        }
    };

    const carouselStyle = "bg-blue-600 h-44 border border-blue-600 rounded-md mx-3 text-center text-white font-semibold text-xl py-5"
    const carStyle2 = "border border-black rounded-md shadow-lg px-2 mx-2"

    return (
        <div>
            <Header/>

            <div className='flex flex-1 justify-between items-center'>
                <div className='px-5 py-5'>
                    <div className='text-xl'>Find Your</div>
                    <div className='text-2xl font-semibold'>Specialist</div>
                </div>
                <div className='text-3xl px-5'><Link to="/search"><FcSearch/></Link></div>
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

                <div className={carouselStyle}>
                    <p>Doctor 1</p>
                </div>
                <div className={carouselStyle}>
                    <p>Doctor 2</p>
                </div>
                <div className={carouselStyle}>
                    <p>Doctor 3</p>
                </div>
                <div className={carouselStyle}>
                    <p>Doctor 4</p>
                </div>
            </Carousel>

            <div className='py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-xl font-semibold'>Categories</div>
                <div>see all</div>
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
                    <img src={require('../assets/Pediatrician.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/neuro.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/Cardiologist.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/neuro.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/Pediatrician.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/neuro.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/Cardiologist.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/neuro.png')}/>
                </div>
                <div className={carStyle2}>
                    <img src={require('../assets/Pediatrician.png')}/>
                </div>
            </Carousel>

            <div className='py-5 px-5 flex flex-1 justify-between items-center'>
                <div className='text-xl font-semibold'>Available Doctors</div>
                <div>see all</div>
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
                
                <div className='px-2'>
                    <img src={require("../assets/1.png")} className="h-56 w-max rounded-md border border-black"/>
                </div>
                <div>
                    <img src={require("../assets/2.png")} className="h-56 w-max rounded-md border border-black"/>
                </div>
                <div>
                    <img src={require("../assets/1.png")} className="h-56 w-max rounded-md border border-black"/>
                </div>
                <div className='px-2'>
                    <img src={require("../assets/2.png")} className="h-56 w-max rounded-md border border-black"/>
                </div>
            </Carousel>
        </div>
    )
};

export default HomePage;
