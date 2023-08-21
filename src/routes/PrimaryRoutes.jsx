import React from 'react'
import Home from '../pages/Home'
import Inplay from '../pages/Inplay'
import MultiMarket from '../pages/MultiMarket'
import Cricket from "../pages/Cricket"
import Soccer from "../pages/Soccer"
import Tennis from "../pages/Tennis"
import Casino from "../pages/Casino"
import Slots from "../pages/Slots"
import { Route, Routes } from 'react-router-dom'
import UserDashboard from '../pages/Dashboard/UserDashboard'

const PrimaryRoutes = () => {
    return (
        <Routes>
            <Route path='/home/*'
                element={<Home/>}/>
            <Route path='/in-play/*'
                element={<Inplay/>}/>
            <Route path='/multi-market/*'
                element={<MultiMarket/>}/>
            <Route path='/cricket/*'
                element={<Cricket/>}/>
            <Route path='/soccer/*'
                element={<Soccer/>}/>
            <Route path='/tennis/*'
                element={<Tennis/>}/>
            <Route path='/casino/*'
                element={<Casino/>}/>
            <Route path='/slots/*'
                element={<Slots/>}/>
            <Route path='/userprofile' element={<UserDashboard/>} />
        </Routes>
    )
}

export default PrimaryRoutes
