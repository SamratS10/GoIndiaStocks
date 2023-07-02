'use client'
import React from 'react'
import {HiUserCircle} from 'react-icons/hi'
import Image from 'next/image'


const header = () => {
  return (
    <div>
        <div className="bg-container w-full">
            <div className="flex flex-col items-center">
                <Image src='/goindianadvisor.png' alt="logo" width={80} height={30}/>
                <h1 className="lg:text-2xl text-cyan-600 font-medium sm:text-sm">Go India Advisors</h1>
                <p className="sm:text-sm text-red-500">Unbiased and Balanced</p>
            </div>
            <div className="flex flex-row border-solid border-2 border-gray-600 w-4/12 p-1 rounded-lg">
                <input type="search" className="w-11/12 p-1 outline-none"/>
                <Image src='/search.png' alt="search-logo" height="20" width="25" className="ml-8"/>
            </div>
            <div className="flex flex-row gap-5 sm:hidden lg:inline-flex md:hidden">
                <p className="p-1">Contact Us</p>
                <button className="text-dark border-solid border-2 border-slate-500 p-1">
                    SIGN UP
                </button>
                <button className="text-dark border-solid border-2 border-slate-500 p-1">
                    SIGN IN
                </button>
            </div>
            <HiUserCircle font-size={40} color='brown' className="sm:block lg:hidden"/>
        </div>
    </div>
  )
}

export default header
