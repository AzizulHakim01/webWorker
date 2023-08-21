import {faSquareMinus} from '@fortawesome/free-regular-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { fetchFromAPI } from '../api/fetchFromAPI'
import { useEffect } from 'react'

const InPlayMatch = () => {
    const [inplay, setInplay] = useState("")
    useEffect(()=>{
        fetchFromAPI(`inplay`)
        .then((data)=>{
            setInplay(data)
            console.log(inplay)
        })
    },[])
    const [soccerOpen, setSoccerOpen] = useState(true)
    const [tennisOpen, setTennisOpen] = useState(true)

    return (
      <>
        <div className=''>
            <div className="bg-[#243a48] px-2 py-1 flex items-center justify-between mt-2 cursor-pointer"
                onClick={
                    () => setSoccerOpen(!soccerOpen)
            }>
                <p className='text-white font-semibold'>Soccer</p>
                <FontAwesomeIcon icon={faSquareMinus}
                    className='text-white'/>
            </div>
            {
            soccerOpen && <>
                <div className="w-[100%] flex py-1 px-3 bg-[#ced5da]">
                    <div className="w-[60%]"></div>
                    <div className="w-[40%] flex justify-between items-center text-sm">
                        <p>1</p>
                        <p>x</p>
                        <p>2</p>
                    </div>
                </div>
                <div className="w-[100%] bg-white border-b-[#243a48]-200">
                    <div className="w-[100%] flex">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>{inplay.results.NA}</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex ">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    
                </div>
            </>
        } </div>
        <div className=''>
            <div className="bg-[#243a48] px-2 py-1 flex items-center justify-between mt-2 cursor-pointer"
                onClick={
                    () => setTennisOpen(!tennisOpen)
            }>
                <p className='text-white font-semibold'>Soccer</p>
                <FontAwesomeIcon icon={faSquareMinus}
                    className='text-white'/>
            </div>
            {
            tennisOpen && <>
                <div className="w-[100%] flex py-1 px-3 bg-[#ced5da]">
                    <div className="w-[60%]"></div>
                    <div className="w-[40%] flex justify-between items-center text-sm">
                        <p>1</p>
                        <p>x</p>
                        <p>2</p>
                    </div>
                </div>
                <div className="w-[100%] bg-white border-b-[#243a48]-200">
                    <div className="w-[100%] flex">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex ">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[60%] ps-2 flex gap-2 text-sm items-center border-b-2 py-1">
                            <FontAwesomeIcon icon={faCircle}
                                style={
                                    {color: "#6bbd11"}
                                }
                                className=''/>
                            <p className='text-[#2e89d1] font-bold'>Djurgardens vs Malmo FF</p>
                            <span className='text-[#508d0e] font-bold'>In-Play</span>
                        </div>
                        <div className="w-[40%] flex gap-2 text-md font-bold items-center justify-between border-b-2 py-1">
                            <span className='bg-[#72bbef] px-3'>1.62</span>
                            <span className='bg-[#faa9ba] px-3'>1.63</span>
                            <span className='bg-[#72bbef] px-3'>1.61</span>
                            <span className='bg-[#faa9ba] px-3'>1.64</span>
                            <span className='bg-[#72bbef] px-3'>1.6</span>
                            <span className='bg-[#faa9ba] px-3'>1.65</span>
                        </div>
                    </div>
                    
                </div>
            </>
        } </div>



        
        </>
    )
}

export default InPlayMatch
