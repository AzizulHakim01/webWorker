import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {userDashboardSideMenu} from '../../../data'

const UserMenu = () => {
    const location = useLocation()
    return (
        <div className='h-auto mt-2'>
            <div className="bg-white flex flex-col w-[250px] items-start overflow-hidden">
                {
                userDashboardSideMenu.map((data) => {
                    const isActive = location.pathname === data.link
                    return (
                            <NavLink to={
                                    data.link
                                }
                                className={
                                    `border-b ps-3 py-1 text-sm w-[100%] hover:bg-[#f2dca7] ${
                                        isActive ? "bg-[#f2dca7] text-black" : "text-[#000]"
                                    }`
                                }
                                key={
                                    data.id
                            }>
                                {
                                data.text
                            }</NavLink>
                    )
                })
            } </div>
        </div>
    )
}

export default UserMenu
