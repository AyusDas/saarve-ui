import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Search = () => {
  return (
        <div>
            <header className='flex flex-1 items-center w-full py-5'>
                <div className="text-3xl px-2">
                    <Link to="/home"><BsArrowLeft/></Link>
                </div>
                <div className='text-3xl font-semibold w-5/6 text-center'>
                    Search
                </div>
            </header>
            <div className='flex flex-1 justify-between items-center bg-[#E6EFF9] mt-2'>
                <div className='px-5 py-5'>
                    <div className='text-xl'>Search Your</div>
                    <div className='text-2xl font-semibold'>Specialist</div>
                </div>
            </div>
            <div className='w-full py-5 bg-[#E6EFF9]'>
                <form className='w-full flex flex-col items-center'>
                    <div className="w-full px-10 py-5">
                        <input name="area" className='w-full px-5 py-3 rounded-md outline-none shadow-lg' placeholder="Area/location"/>
                    </div>
                    <div className="w-full px-10 py-5">
                        <input name="speciality" className='w-full px-5 py-3 rounded-md outline-none shadow-lg' placeholder="Doctor/Speciality"/>
                    </div>
                    <div className="w-full px-10 py-5">
                        <input type="date" name="date" className='w-full px-5 py-3 rounded-md outline-none shadow-lg'/>
                    </div>
                    <div className="w-full px-10 py-5">
                        <input type="button" value="Search" className='w-full px-5 py-3 rounded-md outline-none shadow-lg bg-blue-600 text-white text-xl font-semibold'/>
                    </div>
                </form>
            </div>
            <div className='w-full h-72 bg-[#E6EFF9] flex flex-1 items-end'>
                <img className='w-full' src={require('../assets/bg2.png')}/>
            </div>
        </div>
    )
}

export default Search;

