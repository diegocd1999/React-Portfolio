import React, { useState } from "react"
import images from "../../components/CarouselData"
import  ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import  ArrowForwardIosIcon  from "@material-ui/icons/ArrowForwardIos"
import rightArrow from "../../assets/rightArrow.svg"
import leftArrow from "../../assets/leftArrow.svg"
import hotelSlides from '../../assets/hotelSlides.pdf'


export default function Hotel() {
    const [currImg, setCurrImg] = useState(0)

    return (
        


    <div className="carousel">
        <a class='text3' href={hotelSlides} target="_blank" rel="noopener noreferrer">Download PDF</a>
        <div className="carouselInner" style={{backgroundImage: `url(${images[currImg].img})`}}>
        
            <div className="left" 
                onClick={()=> {
                currImg > 0 && setCurrImg(currImg - 1)}}>
              <img src={leftArrow} alt="" />
            </div>    
            <div className="center">
             
            </div>    
            <div className="right" 
                onClick={()=> {
                currImg < images.length - 1 && setCurrImg(currImg + 1)}}>
                <img src={rightArrow} alt="" />
            </div>    
        </div>
    </div>
    )        
     
  
}

