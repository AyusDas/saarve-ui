import React, { useContext, useState, useEffect } from 'react'
import './signUp.css'
import Header from '../components/Header';
import AuthContext from '../context/authContext';
import './HomePage.css'

const SignUp = () => {
    let [idToken, setIdToken] = useState(() => localStorage.getItem('idToken') ? JSON.parse(localStorage.getItem('idToken')) : null )
    const inputClassName = "mt-2 rounded-md py-3 text-base font-normal px-3 border border-[#8888885c] w-full lg:w-1/3 focus:shadow-xl focus:border-0 focus:outline-none"
    const formDivClassName = "text-xl text-[#6e6e6e] font-semibold tracking-wide mt-7 nice-font"
    let { SignUpUser } = useContext(AuthContext)
    const [profileData, setProfileData] = useState(null)
    const host = '13.232.76.12'
    useEffect(() => {
        fetch('http://13.232.76.12:8000/api/app/profile/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization' : 'Token '+idToken
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setProfileData(data)
            localStorage.setItem('hasRegistered' , 'yes')
        })
    },[])

    return (
        <div className=''>
            <Header/>
            <div className="absolute top-8 left-9 block w-5/6">
                <div className="mt-16 w-full">
                    <form onSubmit={SignUpUser}>
                        <div className={formDivClassName}>
                            <p>Full Name</p>
                            <input className={inputClassName} type="text" name="full_name" defaultValue={ profileData ? profileData.full_name : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Email</p>
                            <input className={inputClassName} type="email" name="email" defaultValue={ profileData ? profileData.email : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Your Address</p>
                            <input className='mt-2 rounded-md py-3 text-base font-normal px-3 border border-[#8888885c] w-full h-32 lg:w-1/3 focus:shadow-xl focus:border-0 focus:outline-none' type="text" name="address" defaultValue={ profileData ? profileData.address : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>City</p>
                            <input className={inputClassName} type="text" name="city" defaultValue={ profileData ? profileData.city : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Pincode</p>
                            <input className={inputClassName} type="text" name="pincode" defaultValue={ profileData ? profileData.pincode : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Gender</p>
                            <input className={inputClassName} type="text" name="gender" defaultValue={ profileData ? profileData.gender : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Age</p>
                            <input className={inputClassName} type="text" name="age" defaultValue={ profileData ? profileData.age : '' }/>
                        </div>
                        <div className={formDivClassName}>
                            <p>Phone Number</p>
                            <input className={inputClassName} type="text" name="phone" defaultValue={ profileData ? profileData.phone : '' }/>
                        </div>
                        <input type="submit" value="Save" className="mt-10 bg-blue-700 text-lg font-semibold nice-font text-white py-3 px-2 rounded-md w-full lg:w-1/3 hover:bg-blue-800"/>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;
