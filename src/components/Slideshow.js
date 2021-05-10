import React, { useState } from 'react';
import './Slideshow.css';
import Slide1 from "../images/slide1-big.jpg"
import Slide2 from "../images/slide2-big.jpg"
// import { GiCircle } from 'react-icons/gi';
import Header from './Header';
// import Slide1 from "../images/01_care.jpg"
// import Slide2 from "../images/02_design.jpg"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
    const slides = [Slide1, Slide2]

    const [imageIndex, setImageIndex] = useState(0);
    
    // const divStyle = {
    //     height: "100vh",
    //     width: "100%",
    //     background: `url(${slides[imageIndex]})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    // }

      return (
          <div className="sliderWrapper">
            <div className="slide">
                <img className="sliderImg" src = {Slide2} alt="cos"/>
                <div className="info">
                    <div className="section">
                        <div className="sectionCircle"/>
                            <span className="one">1.</span>
                        <div className="crossLine"></div>
                    </div>
                    <div className="description">
                        <p>Bądź sobą.<br/>Pokaż się światu.</p><br/>
                    </div>
                    <div className ="company">
                        <p>KEUNE <span>DESIGN</span></p>
                    </div>
                    <div className="underlineWrapper">
                        <div className="underline"></div>
                        <div className="circleArrowDiv">
                            <div className="outerCircle">
                                <span className="material-icons-outlined arrow">navigate_next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide">
                <img className="sliderImg" src = {Slide1} alt="cos"/>

                <div className="info">
                    <div className="section">
                        <div className="sectionCircle"/>
                            <span className="one">1.</span>
                        <div className="crossLine"></div>
                    </div>

                    <div className="description">
                        <p>Bez kompromisu.<br/>Idealnie takie jak lubisz.</p><br/>
                    </div>

                    <div className ="company">
                        <p>KEUNE <span>DESIGN</span></p>
                    </div>

                    <div className="underlineWrapper">
                        <div className="underline"></div>
                        <div className="circleArrowDiv">
                            <div className="outerCircle">
                                <span className="material-icons-outlined arrow">navigate_next</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="navigation">
                <div className="arrows">
                    <span id="right" className="material-icons-outlined arrow">navigate_next</span>
                    <span id="left" className="material-icons-outlined arrow">navigate_before</span>
                    
                </div>
                <div className="buttons">
                    <div className="button active"></div>
                    <div className="button"></div>
                </div>
            </div>


            {/* <div className="slide">
                <img className="sliderImg" src = {slides[imageIndex+1]} alt="cos"/>
                <p>Bez kompromisu.<br/>Takie jak lubisz</p>
            </div> */}
            {/* <Header /> */}
          </div>
      );
}
export default Slideshow;
