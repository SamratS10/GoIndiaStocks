"use client"
import React from 'react'
import {useState} from 'react'
import {FaUserCircle} from "react-icons/fa"
import {BsBellFill} from 'react-icons/bs'
import {BiMessageError} from 'react-icons/bi'
import {GoTriangleDown} from 'react-icons/go'
import {BsCoin} from 'react-icons/bs'
import {VscTriangleRight} from 'react-icons/vsc'
import LeftSide from '../left/left'
import Market from '../market/market'

const SideBar = () => {
    const [innerDisplay,setInnerDisplay] = useState(true)
    const [sideBar,setSideBar] = useState(true)
    const hideDisplayBlock = ()=>{
        setInnerDisplay(!innerDisplay)
    }
    const hideSideBar = ()=>{
      setSideBar(!sideBar)
    }
    const addClass = innerDisplay? "unhide" : 'hide'
    const hideBar = sideBar ? "unhide" : "hide"


  return (
    <div className="flex flex-row">
      <div className={`p-4 text-slate-200 text-xl bg-sky-900 h-screen sm:w-1/3 md:w-1/5 ${hideBar} sm:text-sm lg:text-lg`}>
        <div className="flex items-center justify-between p-5">
            <div className="flex gap-2">
            <FaUserCircle font-size={30} color={"white"} />
            <h1 className="text-lg">Hello, User</h1>
            </div>
            <BsBellFill font-size={25} color='white'/>
        </div>
        <hr/>
        <div className="flex items-center justify-between px-5 py-2 bg-sky-950 mt-3"  onClick={hideDisplayBlock}>
            <div className="flex gap-2">
                <BiMessageError font-size={25} color='white'/>
                <h1>Disscussion Fourm</h1>
            </div>
            <GoTriangleDown font-size={30} color='white'/>
        </div>
        <ul className={`flex flex-col py-3 px-5 text-xl ${addClass}`}>
            <li className="flex gap-3 pt-2 pb-2">
                <BsCoin font-size={30} color='white'/>
                <p>Market Stories</p>
            </li>
            <li className="pl-10 pt-1 pb-1">Market</li>
            <li className="pl-10 pt-2 pb-1">Sector</li>
            <li className="pl-10 pt-2 pb-1">Watchlist</li>
            <li className="pl-10 pt-2 pb-1">Events</li>
            <li className="pl-10 pt-2 pb-1">News/interview</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <button className="bg-sky-900 py-10" onClick={hideSideBar}>
          <VscTriangleRight font-size={40} color='white'/>
        </button>
       </div>
      <LeftSide/>
      <Market/>
    </div>
  )
}

export default SideBar
