import React from 'react'
import "./landing.css"
import { Link } from "react-router-dom";

const Landing = () => {
    const buttonClassName = "mt-7 text-white text-lg font-semibold tracking-wide px-5 py-2 border border-blue-600 bg-blue-600 rounded-md w-full text-center"
    return (
        <div className="mybg h-screen w-screen">
            <div className='absolute translate-x-1/2 top-96 right-1/2 w-5/6 flex flex-col items-center'>
                <div>
                    <p className='text-black text-2xl font-semibold tracking-wide'>
                        Welcome to Saarve
                    </p>
                </div>
                <img src={require('../assets/logo.png')} alt="img" />
                <div className='mt-36 w-full'>
                    <p className={buttonClassName}><Link to="/login">Sign In</Link></p>
                    <p className={buttonClassName}><Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Landing;
