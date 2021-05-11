import React, { useEffect, useState } from 'react';
import './Slideshow.css';
import Slide1 from "../images/slide1-big.jpg"
import Slide2 from "../images/slide2-big.jpg"
import Header from './Header';

const Slideshow = () => {
    const slides = [Slide1, Slide2]

    const [currentSlide, setCurrentSlide] = useState(0);
   
    // Start animation
    useEffect(()=>{
        const timeout = setTimeout(() => {
            activate("right")
            console.log("called");
        }, 5000);

        return ()=>{clearTimeout(timeout)}

    },[currentSlide])

    // Handling  buttons and arrows
    const activate = (value) => {
        if(value === "0") {
            setCurrentSlide(0)
         }
         if(value === "1") {
            setCurrentSlide(1)
         }
         if(value === "right") {
            if(currentSlide === slides.length-1){
                setCurrentSlide(0)
            }
            else {
                setCurrentSlide(currentSlide +1)
            }
         }
         if(value === "left") {
            if(currentSlide === 0){
                setCurrentSlide(slides.length-1)
            }
            else {
                setCurrentSlide(currentSlide -1)
            }
         }
    }

    return (
        <div className="sliderWrapper">
            
            <div className={`slide ${currentSlide === 0 ? "slide-active": null}`}>
                <img className="sliderImg" src = {Slide2} alt="cos"/>
                <div className="info">
                    <div className="section">
                        <div className="sectionCircle"></div>
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

            <div className = {`slide ${currentSlide === 1 ? "slide-active": null}`}>
                <img  className="sliderImg" src = {Slide1} alt="cos"/>

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
                    <span id="right" className="material-icons-outlined arrow"
                    onClick= {() => activate("right")}>navigate_next</span>
                    <span id="left" className="material-icons-outlined arrow"
                    onClick= {() => activate("left")}>navigate_before</span>
                </div>
                <div className="buttons">
                    <div className={`${currentSlide === 0 ? "button-active": "button"}`}
                        onClick= {() => activate("0")}>
                    </div>
                    <div className={`${currentSlide === 1 ? "button-active": "button"}`}
                        onClick= {() => activate("1")}>
                    </div>
                </div>
            </div>

        </div>
      );
}
export default Slideshow;
