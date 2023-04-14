import { useState } from "react";
import React from "react";
import Packagebook from './Images/Packagebook.jpg'
import { flexbox } from "@mui/system";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }


    const sliderStyles={
        height:'100%',
        position:'relative'
    }

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize : 'cover', 
        backgroundImage : `url(${slides[currentIndex].url})`,
    }

    const dotsContainerStyles = {
        display : 'flex',
        justifyContent: 'center'
    }

    const dotStyle = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20vh'
    }

    return(
        <div style = {sliderStyles}>
            <div style={slideStyles}></div>
            <div style = {dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style = {dotStyle} onClick = {() => goToSlide(slideIndex)}>·</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider