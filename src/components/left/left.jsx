import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {HiUserCircle} from 'react-icons/hi'
import {FcLike} from 'react-icons/fc'
import {BsFillEyeFill} from 'react-icons/bs'
import {BiMessage} from 'react-icons/bi'
import {AiOutlineShareAlt} from 'react-icons/ai'
import Image from 'next/image'


const LeftSide = () => {
  return (
    <div className="pl-8 pt-2">
      <h1 className="text-red-400 font-medium text-lg mt-4">DISSCUSSION FOURM</h1>
      <div className="pl-10">
        <p className="py-3 text-sm font-medium text-black">Filter</p>
        <div className="flex gap-2 border-solid border-2 border-grey-700 py-3 rounded-md p-2 items-center justify-center">
            <button type="button" className="bg-red-700 text-white rounded-lg p-2">Sector 1</button>
            <button type="button" className="bg-blue-500 text-white rounded-lg p-2">Sector 2</button>
            <button type="button" className='bg-yellow-400 text-white rounded-lg p-2'>Sector 3</button>
            <div className="flex items-center gap-2  border-solid border-2 border-grey-700 rounded-lg pl-2">
                <BsSearch font-size={15} color='black'/>
                <input type="search" placeholder='Search here' className='w-32 outline-none'/>
            </div>
        </div>
        <div className='p-3 drop-shadow-lg border-solid border-2 border-grey-700 mt-3'> 
          <p className="text-right text-blue-700">2 min ago</p>
          <div className='flex items-center justify-center'>
            <Image src='/infibeam.png' alt='infibeam logo' height={300} width={300}/>
          </div>
          <div className='flex gap-2 p-2'>
            <HiUserCircle font-size={30} color='brown'/>
            <p className='text-stone-600'>Lorem Ipsum</p>
            <button type="button" className="bg-red-700 text-white rounded-lg px-2 text-sm">Sector 1</button>
          </div>
          <p className='ml-9 text-dark text-sm p-2'>Lorem Ipsum is simply dummy text of the printing and typescripting industry.Lorem ipsum is..</p>
          <div className='flex justify-between items-center px-2 pt-3 pb-1'>
            <div className="flex gap-1 text-stone-950">
              <FcLike font-size={25}/>
              <p>2K</p>
            </div>
            <div className="flex gap-1">
              <BsFillEyeFill color='black' font-size={25}/>
              <p>2K</p>
            </div>
            <div className="flex gap-1">
              <BiMessage color='black' font-size={25}/>
              <p>2K Comments</p>
            </div>
            <div className="flex gap-1">
              <AiOutlineShareAlt color='black' font-size={25}/>
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="p-3 drop-shadow-lg border-solid border-2 border-grey-700 mt-3">
          <p className="text-right text-blue-700">2 min ago</p>
          <div className='flex gap-2 p-2'>
            <HiUserCircle font-size={30} color='brown'/>
            <p className='text-stone-600'>Lorem Ipsum</p>
            <button type="button" className="bg-blue-500 text-white rounded-lg px-2 text-sm">Sector 2</button>
          </div>
          <p className='ml-9 text-dark text-sm p-2'>Lorem Ipsum is simply dummy text of the printing and typescripting industry.Lorem ipsum is..</p>
          <div className='flex justify-between items-center px-2 pt-3 pb-1'>
            <div className="flex gap-1 text-stone-950">
              <FcLike font-size={25}/>
              <p>2K</p>
            </div>
            <div className="flex gap-1">
              <BsFillEyeFill color='black' font-size={25}/>
              <p>2K</p>
            </div>
            <div className="flex gap-1">
              <BiMessage color='black' font-size={25}/>
              <p>2K Comments</p>
            </div>
            <div className="flex gap-1">
              <AiOutlineShareAlt color='black' font-size={25}/>
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="p-3 drop-shadow-lg border-solid border-2 border-grey-700 mt-3">
          <p className="text-right text-blue-700">2 min ago</p>
          <div className='flex gap-2 p-2'>
            <HiUserCircle font-size={30} color='brown'/>
            <p className='text-stone-600'>Lorem Ipsum</p>
            <button type="button" className="bg-yellow-400 text-white rounded-lg px-2 text-sm">Sector 2</button>
          </div>
          <p className='ml-9 text-dark text-sm p-2'>Lorem Ipsum is simply dummy text of the printing and typescripting industry.Lorem ipsum is..</p>
          <div className='flex justify-between items-center px-2 pt-3 pb-1'>
            <div className="flex gap-1 text-stone-950">
              <FcLike font-size={25}/>
              <p>2K</p>
            </div>
            <div className="flex gap-1">
              <BsFillEyeFill color='black' font-size={25}/>
              <p>2K</p>
            </div>
            <div className="flex gap-1">
              <BiMessage color='black' font-size={25}/>
              <p>2K Comments</p>
            </div>
            <div className="flex gap-1">
              <AiOutlineShareAlt color='black' font-size={25}/>
              <p>Share</p>
            </div>
          </div>
        </div>
        </div>
      </div>
  )    
}

export default LeftSide
