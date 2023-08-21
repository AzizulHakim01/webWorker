import React from 'react'
import NavBar from '../NavBar'
import Header from '../Header'

const Layout = ({children}) => {
  return (
    <div>
        <>
            <div className="">
                <NavBar/>
            </div>
            <div className="">
                {children}
            </div>
        </>
    </div>
  )
}

export default Layout