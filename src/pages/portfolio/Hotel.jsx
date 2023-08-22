import React, { useState } from "react"
import images from "../../components/CarouselData"
import  ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import  ArrowForwardIosIcon  from "@material-ui/icons/ArrowForwardIos"


export default function Hotel() {
    const [currImg, setCurrImg] = useState(0)

    return (
        


    <div className="carousel">
        <div className="carouselInner" style={{backgroundImage: `url(${images[currImg].img})`}}>
        
            <div className="left" 
                onClick={()=> {
                currImg > 0 && setCurrImg(currImg - 1)}}>
                <ArrowBackIosIcon style={{fontSize: 50}}/>    
            </div>    
            <div className="center">
             
            </div>    
            <div className="right" 
                onClick={()=> {
                currImg < images.length - 1 && setCurrImg(currImg + 1)}}>
                <ArrowForwardIosIcon style={{fontSize: 50}}/>
            </div>    
        </div>
    </div>
    )        
     
  
}

