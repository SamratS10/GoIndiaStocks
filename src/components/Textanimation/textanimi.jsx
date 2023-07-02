import React from 'react'

const array = ["Tata Consultance","2500","HDFC Bank","1,701","ICICI Bank","ITC Ltd","SBI","572.80","LIC","632.30","Wipro","389.05","NTPC","189.15","Bajaj Auto","4,685.60","Reliance","2,529.35","TCS","3,214.75","HCL Technologies","1,184.78","ADANI ENTERPRISES LTD","2383.60","AXIS Bank","987.80","NTPC","190.85","DLF","490","INFO","4,484","CG Power","378.40","IDBI Bank","55.32","SRF","2,290.45","Marico","530.85","GAIL","105.00"]

const TextAnimi = () => {
  return (
    <div className=" bg-black overflow-hidden sm:text-sm md:text-lg sm:w-full">
      <div className="text-animation flex items-center gap-8 p-1">{
        array.map((each)=><p key={each} className="para text-sm text-sky-500 font-medium">{each}</p>)
}</div>
    </div>
  )
}

export default TextAnimi
