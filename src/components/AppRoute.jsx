import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Primitive from './Primitive'
import NonPrimitive from './NonPrimitive'
import Home from './Home'
import Pros from './Pros'

const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/primitive' element={<Primitive/>} />
        <Route path='/nonprimitive' element={<NonPrimitive/>} />
        <Route path='/pros' element={<Pros/>} />

    </Routes>


    </>
  )
}

export default AppRoute