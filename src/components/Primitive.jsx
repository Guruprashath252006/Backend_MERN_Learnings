import React, { useState } from 'react'

const Primitive = () => {
  const[heading,setHeading]=useState("Primitive Data Types")

  const clicktochange  = ()=>{
    setHeading("Hurray! Button Clicked")
  }
  return (
    <div className='bg-yellow-300 gap-3 p-10 h-100 flex justify-center items-center flex-col ' >
        <h1>{heading}</h1>

        <button className= 'bg-black rounded text-white p-1'onClick={clicktochange}>Click </button>
        </div>
  )
}

export default Primitive