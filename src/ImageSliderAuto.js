import React from "react";
import additiveInfo from './Images-mobile/AdditiveInfo.jpg'
import MidAgeCouple from './Images-mobile/midAgeCoupleMobileEdited.jpg'
import midAgeCoupleMobileEdited from './Images-mobile/midAgeCoupleMobileEdited.jpg'
import './docomeMobile.css'

const ImageSliderAuto = ({slides}) =>{
    return(
        <div className="sliderWrapper">
            <div className="slider">
                {slides.map((slide, slideIndex) => (
                    <div className="slideContainer">
                        <img id = "slide-1" src = {slides[slideIndex].url} >
                        </img>
                        <div className="sliderText" >
                            <p>{slides[slideIndex].title} <br></br> {slides[slideIndex].subtext}</p>  
                        </div>   
                    </div>
                ))}    
            </div>
          
        </div>
    )
}

export default ImageSliderAuto