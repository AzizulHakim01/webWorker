import React from 'react'
import SideBar from '../SideBar'
import Odds from '../Odds'

const InplayLayout = ({children}) => {
    return (<div className='flex justify-between px-4'>
        <div className="">
            <SideBar/>
        </div>
        <div className=""> {children}</div>
        <div className="">
          <Odds/>
        </div>
    </div>)
}

export default InplayLayout
