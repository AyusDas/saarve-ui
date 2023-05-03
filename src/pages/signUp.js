import React, { useContext } from 'react'
import './signUp.css'
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';
import './HomePage.css'

const SignUp = () => {
    const inputClassName = "mt-2 rounded-md py-3 text-base font-normal px-3 border border-[#8888885c] w-full lg:w-1/3 focus:shadow-xl focus:border-0 focus:outline-none"
    const formDivClassName = "text-xl text-[#6e6e6e] font-semibold tracking-wide mt-7 nice-font"
    let { SignUpUser } = useContext(AuthContext)
    return (
        <div className=''>
            <div className="absolute top-8 left-9 block w-5/6">
                <p className="text-3xl font-semibold text-[#333333] py-3 nice-font">
                    Create Account
                </p>
                <p className="text-base text-[#3a3a3a] nice-font">
                    Already have an account ? 
                    <span className="px-2 text-blue-700 font-semibold hover:underline"><Link to="/landing">Sign In !</Link></span>
                </p>
                <div className="mt-16 w-full">
                    <form onSubmit={SignUpUser}>
                        <div className={formDivClassName}>
                            <p>Username</p>
                            <input className={inputClassName} type="text" name="username"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Email</p>
                            <input className={inputClassName} type="email" name="email"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Password</p>
                            <input className={inputClassName} type="password" name="password"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Confirm password</p>
                            <input className={inputClassName} type="password" name="confirmPassword"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Your Address</p>
                            <input className='mt-2 rounded-md py-3 text-base font-normal px-3 border border-[#8888885c] w-full h-32 lg:w-1/3 focus:shadow-xl focus:border-0 focus:outline-none' type="text" name="address"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>City</p>
                            <input className={inputClassName} type="text" name="City"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Gender</p>
                            <input className={inputClassName} type="text" name="gender"/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Date Of Birth</p>
                            <input className={inputClassName} type="date" name="dateOfBirth"/>
                        </div>
                        <input type="submit" value="Save" className="mt-10 bg-blue-700 text-lg font-semibold nice-font text-white py-3 px-2 rounded-md w-full lg:w-1/3 hover:bg-blue-800"/>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;

