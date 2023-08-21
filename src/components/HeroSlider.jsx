import React from 'react'
import Slider from 'infinite-react-carousel';
import {sliderData} from "../../data"

const HeroSlider = () => {
  return (
    <Slider autoplay={true}>
    {/* Will fetch this data from backend later */}
      {sliderData.map((data)=>{
        return(
          <img className='md:w-[100%]' src={data.image} alt="" key={data.id}/>
        )
      })}
  </Slider>
  )
}

export default HeroSlider