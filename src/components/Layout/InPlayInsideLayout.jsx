import React from 'react'
import InPlayMenu from '../InPlayMenu'

const InPlayInsideLayout = ({children}) => {
  return (
    <div className=''>
        <div className="">
            <InPlayMenu/>
        </div>
        <div className="">{children}</div>
    </div>
  )
}

export default InPlayInsideLayout