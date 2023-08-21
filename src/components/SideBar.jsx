import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons'
import {faChevronRight, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const SideBar = () => {
    const [open, setOpen] = useState(false)
    return (
    <>
    <div className="md:hidden cursor-pointer"   onClick={()=>setOpen(!open)}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
    </div>
    <div className={`bg-[#fff] sticky top-0 z-50 w-[15vw] h-[100%]` }>
        <div className={`bg-[#222222] flex justify-between items-center py-1`}>
            <div className="">
                <FontAwesomeIcon icon={faEllipsisVertical}
                    className='text-[#e9a90e] px-3 text-xl cursor-pointer'/>
                <FontAwesomeIcon icon={faChevronRight}
                    className='text-[#535353] hidden md:block text-xl'/>
            </div>
            <div className="flex items-center gap-1">
                <p className={`text-[#e9a90e] ms-2 md:block md:ms-0 `}>Sports</p>
                <FontAwesomeIcon icon={faChevronRight}
                    className='text-[#535353] hidden md:block text-xl'/>
            </div>
        </div>
        <div className={``}>
          <div className="flex items-center justify-between px-2 hover:bg-[#f2dca7] transition-all cursor-pointer border-b-2">
              <p className='text-[0.9em] font-semibold py-[1px]'>Cricket</p>
              <FontAwesomeIcon icon={faChevronRight} className='bg-[#e9a90e] p-1 rounded-sm text-[10px]'/>
          </div>
          <div className="flex items-center justify-between px-2 hover:bg-[#f2dca7] transition-all cursor-pointer border-b-2">
              <p className='text-[0.9em] font-semibold py-[1px]'>Soccer</p>
              <FontAwesomeIcon icon={faChevronRight} className='bg-[#e9a90e] p-1 rounded-sm text-[10px]'/>
          </div>
          <div className="flex items-center justify-between px-2 hover:bg-[#f2dca7] transition-all cursor-pointer border-b-2">
              <p className='text-[0.9em] font-semibold py-[1px]'>Tennis</p>
              <FontAwesomeIcon icon={faChevronRight} className='bg-[#e9a90e] p-1 rounded-sm text-[10px]'/>
          </div>
        </div>
    </div></>)
}

export default SideBar
