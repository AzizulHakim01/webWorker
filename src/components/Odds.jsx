import { faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Odds = () => {
  return (
    <div className='w-[25vw] bg-white h-[90vh] sticky top-0'>
      <div className="flex justify-between items-center px-3 py-1 text-sm text-white bg-[#294252]">
        <p>Bet Slip</p>
        <FontAwesomeIcon icon={faSquareMinus} />
      </div>
      <div className="">
        <p className='text-center mt-3'>Click on the odds to add selections to the betslip</p>
      </div>
    </div>
  )
}

export default Odds