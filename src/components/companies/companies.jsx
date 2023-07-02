import React from 'react'
import Image from 'next/image'

const imagesArray = ['/stock1.png','/stock2.png','/stock3.png','/stock4.png','/stock5.png','/stock6.png','/stock7.png','/stock8.png','/stock9.png','/stock10.png','/stock12.png','/stock13.png','/stock14.png','/stock15.png']
const Companies = () => {
  return (
    <div>
      <h1 className="text-red-600 font-medium p-3 text-xl sm:hidden lg:block">FEATURED COMPANIES</h1>
      <div className=" bg-blue-100 overflow-hidden">
      <div className="text-animation items-center flex gap-8 p-1 mix-blend-multiply">{
        imagesArray.map((each)=> <Image src={each} height={20} width={90} alt="company logo"/>)
}</div>
    </div>
    </div>
  )
}

export default Companies
