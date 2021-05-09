import React, { useState } from 'react';
import './Slideshow.css';
import Slide1 from "../images/slide1-big.jpg"
import Slide2 from "../images/slide2-big.jpg"

const Slideshow = () => {
    const imagess = [Slide2,Slide1];
    const [currentImg, setCurrentImg] = useState(0)

    return ( 
        <div className="slideshowContainer">
            <div className="slideshowItem"
            // style = {{ backgroundImage:`url(${imagess[currentImg]})`}}>
            style = {{ backgroundColor:`yellow`}}>
                {/* <img className="sliderImage" src={images[currentImg]}></img> */}
            </div>
        </div>
     );
}
 
export default Slideshow;