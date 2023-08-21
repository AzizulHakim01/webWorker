import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InPlayInside from '../pages/InPlayInside'
import Running from '../pages/Running'
import AfterToday from '../pages/AfterToday'
import InPlayMatch from '../pages/InPlayMatch'

const InsidePlayRoutes = () => {
  return (
    <Routes>
        <Route path='/inplay' element={<InPlayMatch/>}/>
        <Route path='/running' element={<Running/>}/>
        <Route path='/afterToday' element={<AfterToday/>}/>
    </Routes>
  )
}

export default InsidePlayRoutes