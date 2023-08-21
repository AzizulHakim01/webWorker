import React from 'react'
import {matchesData} from '../../data'
import { useNavigate } from 'react-router-dom'
const Matches = () => {
    const navigate = useNavigate()
    return (<>
        <div className='h-auto mx-auto flex justify-between gap-4 flex-wrap mt-3'> {
            matchesData.map((data) => {
                return (
                    <div className="overflow-hidden cursor-pointer h-[280px]" key={data.id} onClick={()=>navigate(data.link)}>
                        <img src={data.images} alt="" className='z-[-99] hover:scale-125 transition-all duration-[0.8s]'/>
                        <div className="flex bg-black-600 mt-[-28px] backdrop-brightness-75 justify-between items-center bottom-0">
                            <h1 className=' text-white text-xl px-2 font-bold '>{data.heading}</h1>
                            <button className='text-white font-bold bg-[#ffc21d] px-3 cursor-pointer py-1'>Play Now</button>
                        </div>
                    </div>)
            })
        } </div>
    </>)
}

export default Matches
