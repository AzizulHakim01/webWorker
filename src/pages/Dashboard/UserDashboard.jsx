import React from 'react'
import UserMenu from '../../components/UserPanel/UserMenu'

const UserDashboard = () => {
  return (
    <div className='w-[80%] mx-auto flex'>
      <div className="">
        <UserMenu/>
      </div>
      <div className=''>
        Menu Preview
      </div>
    </div>
  )
}

export default UserDashboard