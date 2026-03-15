import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Day2 from '../Pages/Day2'
import Day3 from '../Pages/Day3'
import Day4 from '../Pages/Day4'


const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/Day2" element={<Day2/>} />
        <Route path="/Day3" element={<Day3/>} />
         <Route path="/Day4" element={<Day4/>} />
    </Routes>
    
    </>
  )
}

export default AppRoutes