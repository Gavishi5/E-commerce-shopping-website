import React, { useState } from 'react'
import EastOutlinedIcon  from "@mui/icons-material/EastOutlined"
import WestOutlinedIcon from "@mui/icons-material/WestOutlined"
import "./Slider.scss"

const Slider = () => {

    const[currentSlide,setCurentSlide] = useState(0)
    const data  =[
        "https://thumbs.dreamstime.com/b/fashion-young-smiling-woman-wearing-shopping-bags-straw-hat-fashion-young-smiling-woman-wearing-shopping-bags-straw-hat-white-117726305.jpg",
        "https://img.freepik.com/free-photo/caucasian-woman-s-portrait-yellow-space_155003-20723.jpg",
        "https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg",
    ];    

    const prevSlide = () => {
        setCurentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider;