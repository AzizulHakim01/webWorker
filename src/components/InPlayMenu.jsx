import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { inPlayInsideMenu } from '../../data'

const InPlayMenu = () => {
  const location = useLocation()
  return (
    <div className='h-auto w-[52vw] mt-4'>
      <div className="bg-white flex w-[408px] rounded-md items-center overflow-hidden">
        {
          inPlayInsideMenu.map((data)=>{
            const isActive = location.pathname === data.link
            return(
              <NavLink to={data.link} className={`px-8 border-r-2 text-xl font-semibold ${isActive?"bg-[#3b5160] text-white":"text-[#3b5160]"}`} key={data.id}>{data.text}</NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default InPlayMenu