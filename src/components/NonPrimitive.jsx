import { useState } from "react"


const NonPrimitive = () => {
  

  const [arr,setArr] = useState([1,2,3,4,5,6,7,8,9,10])

  const Changedarr= ()=>{
    const fileter = arr.filter((e)=>e%2==0)
    setArr(fileter)
  }

  return (
    <>
    <div className='bg-green-500 h-80 text-white p-10 flex justify-center items-center flex-col'>
        <div>
        <h1>{arr}</h1>

        <button onclick={Changedarr} className="bg-black p-1 text-white rounded">Click to change</button>
        </div>  

    </div>
    </>
  )
}

export default NonPrimitive