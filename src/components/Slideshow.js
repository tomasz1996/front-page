import React, { Fragment, useEffect, useState } from 'react';
import './Slideshow.css';
import Slide1 from "../images/slide1-big.jpg"
import Slide2 from "../images/slide2-big.jpg"
import znak_keune from '../images/znak_keune.svg';
import znak_keune_WHITE from '../images/znak_keune_WHITE.svg';
import Header from './Header';

const Slideshow = () => {
    const slides = [Slide1, Slide2]

    const [currentSlide, setCurrentSlide] = useState(0);
   
    // Start animation and run on every re-render
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

    let returnWhiteLogo = () => {
        return(<Fragment>
            <img className="znakKeuneWhite" src={znak_keune_WHITE} alt="znak keune white" onClick= {() => activate("0")}/> 
        </Fragment>)
    }
    let returnBlackLogo = () => {
        return(<Fragment>
            <img className="znakKeune" src={znak_keune} alt="znak keune black"  onClick= {() => activate("1")}/> 
        </Fragment>)
    }


    return (
        <div>
            <Header currentSlide={currentSlide}/>
            <div className="sliderWrapper">
                
                <div className={`slide ${currentSlide === 0 ? "slide-active": null}`}>
                    <img className="sliderImg" src = {Slide2} alt="cos"/>
                    <div className="info">
                        <div className="section">
                            <div className="sectionCircle sectionCircleWhite"></div>
                            <span className="one oneWhite">1.</span>
                            <div className="crossLine crossLineWhite"></div>
                        </div>
                        <div className="description descriptionWhite">
                            <p>Bądź sobą.<br/>Pokaż się światu.</p><br/>
                        </div>
                        <div className ="company companyWhite">
                            <p>KEUNE <span>DESIGN</span></p>
                        </div>
                        <div className="underlineWrapper">
                            <div className="underline underlineWhite"></div>
                            <div className="circleArrowDiv">
                                <div className="outerCircle outerCircleWhite">
                                    <span className="material-icons-outlined arrowWhite">navigate_next</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className = {`slide ${currentSlide === 1 ? "slide-active": null}`}>
                    <img  className="sliderImg" src = {Slide1} alt="cos"/>
                    <div className="info">
                        <div className="section">
                            <div className="sectionCircle sectionCircleBlack"/>
                                <span className="one oneBlack">1.</span>
                            <div className="crossLine crossLineBlack"></div>
                        </div>
                        <div className="description descriptionBlack">
                            <p>Bez kompromisu.<br/>Idealnie takie jak lubisz.</p><br/>
                        </div>
                        <div className ="company companyBlack">
                            <p>KEUNE <span>DESIGN</span></p>
                        </div>
                        <div className="underlineWrapper">
                            <div className="underline underlineBlack"></div>
                            <div className="circleArrowDiv">
                                <div className="outerCircle outerCircleBlack">
                                    <span className="material-icons-outlined arrow">navigate_next</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
                
                <div className="navigation">

                    <div className="arrows">
                        <span className={`material-icons-outlined ${currentSlide === 0 ? "arrowWhite": null}`}
                        onClick= {() => activate("right")}>navigate_next</span>
                        <span  className={`material-icons-outlined ${currentSlide === 0 ? "arrowWhite": null}`}
                        onClick= {() => activate("left")}>navigate_before</span>
                    </div>

                    <div className={`${currentSlide === 0 ? "buttonsWhite": "buttonsBlack"}`}>
                        <div className={`${currentSlide === 0 ? "buttonBlank": "buttonBlack"}`}
                            onClick= {() => activate("0")}>
                            {currentSlide === 0 ? returnWhiteLogo() : <div></div>}
                        </div>
                        <div className={`${currentSlide === 0 ? "buttonWhite": "buttonBlank"}`}
                            onClick= {() => activate("1")}>
                            {currentSlide === 0 ?  <div></div> : returnBlackLogo()}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
      );
}
export default Slideshow;
