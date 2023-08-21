import React from 'react'
import InplayLayout from '../components/Layout/InplayLayout'
import InPlayInside from './InPlayInside'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const MultiMarket = () => {
    return (
        <>
            <div className="bg-[#f0ece1] h-[100vh]">
                <InplayLayout>
                    <p className='px-2 pt-2'>Multi Markets</p>
                    <p className='px-2'>There are currently no followed multi markets.</p>

                    <div className="flex justify-center gap-8 bg-white p-3 w-[100%] mx-auto mt-14 text-[#a6a6a6] transition-all duration-[0.6s]">
                        <Link to="https://www.facebook.com/sheikh.munna.942">
                            <img src="/images/fb.png" alt="" className='w-16 hover:opacity-75 transition-all'/>
                        </Link>
                        <Link to="https://wa.me/qr/373UEKEPTQK3G1" className='hover:text-[#000]'>
                            <img src="/images/wa.png" alt="" className='w-16 hover:opacity-75 transition-all'/>
                        </Link>
                        <Link to={"mailto: azizulhakimgps@gmail.com"}>
                            <FontAwesomeIcon icon={faEnvelope}
                                className='text-6xl hover:opacity-75 transition-all'/>
                        </Link>

                    </div>
                    <div className="flex justify-center mt-10 rounded-xl overflow-hidden ">
                        <Link to={"/"}>
                            <img src="/images/trade.png" alt="" className='w-[200px] rounded-xl hover:scale-125 transition-all'/>
                        </Link>
                    </div>
                    <footer className='w-[50%] mx-auto flex flex-wrap gap-3 items-center justify-center text-[#797c7d] cursor-pointer text-sm mt-5'>
                        <Link to={"/policy"}
                            className='underline'>Privacy Policy</Link>-
                        <Link to={"/policy"}
                            className='underline'>Terms & Conditions</Link>-
                        <Link to={"/policy"}
                            className='underline'>Rules and Regulations</Link>-
                        <Link to={"/policy"}
                            className='underline'>KYC</Link>-
                        <Link to={"/policy"}
                            className='underline'>Responsible Gaming</Link>-
                        <Link to={"/policy"}
                            className='underline'>About Us</Link>-
                        <Link to={"/policy"}
                            className='underline'>Self-execution Policy</Link>-
                        <Link to={"/policy"}
                            className='underline'>Underage Policy</Link>-
                    </footer>
                </InplayLayout>
            </div>
        </>
    )
}

export default MultiMarket
