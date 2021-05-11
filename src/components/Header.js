import React, { useState } from 'react';
import  './Header.css';
import logo from '../images/logo_KEUNE.svg';
import fb from '../images/fb.svg';
import insta from '../images/insta.svg';
import twitter from '../images/twitter.svg';
import yt from '../images/yt.svg';
import logo_WHITE from '../images/logo_KEUNE_WHITE.svg';
import fb_WHITE from '../images/fb_WHITE.svg';
import insta_WHITE from '../images/insta_WHITE.svg';
import twitter_WHITE from '../images/twitter_WHITE.svg';
import yt_WHITE from '../images/yt_WHITE.svg';
import Sidebar from './Sidebar';

// import { Link } from 'react-router-dom'


const Header = (props) => {

const currentSlide = props.currentSlide

const [dropdown, setDropdown] = useState(false)
const [isActiveHamburger, setIsActiveHamburger] = useState(false)

const showDropdown = () => setDropdown(!dropdown)

const hamburgerAction = () => {
    setIsActiveHamburger(!isActiveHamburger);
    console.log("clicked hamburger");
}
const rotateDown = { 
    transform: "rotate(45deg)",
    top:"10px"
};
const rotateUp = { 
    transform: "rotate(-45deg)",
    top:"-10px"
};

//Products dropdown
const moveDown = { 
    top:"60px",
    opacity: "1",
};


    return(
        <div className="container">
            <div className="kenueLogoWrapper">
                <img className="kenueLogoImg" src={`${currentSlide === 0 ? logo_WHITE: logo}`} alt="KENUE LOGO" />
            </div>

            <div className="menuWrapper">

                <div className="items">

                    <div className={`item  ${currentSlide === 0 ? "itemWhite": "itemBlack"}`}>
                        <p>Nowosci</p>
                    </div>
                    
                    <div className={`item  produkty ${currentSlide === 0 ? "itemWhite": "itemBlack"}`} 
                        onClick = {showDropdown}>
                        <p>Produkty</p>
                        <span  className={`material-icons-outlined  ${currentSlide === 0 ? "productArrowWhite": "productArrowBlack"}`} 
                        onClick = {showDropdown}>expand_more</span>

                        <div className="productDropdown" 
                        style = {dropdown? moveDown : null}
                        >
                            <div className="dropdownItem">Produkt 1</div>
                            <div className="dropdownItem">Produkt 2</div>
                            <div className="dropdownItem">Produkt 3</div>
                            <div className="dropdownItem">Produkt 4</div>
                            <div className="dropdownItem">Produkt 5</div>
                        </div>
                    </div>
                    <div className={`item  ${currentSlide === 0 ? "itemWhite": "itemBlack"}`}>
                        <p>Trendy</p>
                    </div>
                    <div className={`item  oFirmie ${currentSlide === 0 ? "itemWhite": "itemBlack"}`}>
                        <p>O firmie</p>
                    </div>
                    <div className={`item  ${currentSlide === 0 ? "itemWhite": "itemBlack"}`}>
                        <p>Salony</p>
                    </div>
                    <div className={`item  ${currentSlide === 0 ? "itemWhite": "itemBlack"}`}>
                        <p>Dystrybutorzy</p>
                    </div>
                    <div className={`item  ${currentSlide === 0 ? "itemWhite": "itemBlack"}`}>
                        <p>Kontakt</p>
                    </div>
                </div>
                
                <div className="socials">
                    {/* <svg className="facebook"> 
                        <use style={{color: "red"}} href="./src/images/fb.svg"></use>
                    </svg> */}
                    <a href="https://www.facebook.com/KeuneHaircosmetics/" target="_blank" rel="noreferrer">
                        <img className="social fb" src={`${currentSlide === 0 ? fb_WHITE : fb}`} alt="facebook logo"/>
                    </a>
                    <a href="https://www.twitter.com/KeuneUK/" target="_blank" rel="noreferrer">
                        <img className="social twitter" src={`${currentSlide === 0 ? twitter_WHITE : twitter}`} alt="twitter logo"/>
                    </a>
                    <a href="https://www.youtube.com/KeuneHaircosmetics/" target="_blank" rel="noreferrer">
                        <img className="social youtube" src={`${currentSlide === 0 ? yt_WHITE : yt}`} alt="youtube logo"/>
                    </a>
                    <a href="https://www.instagram.com/KeuneHaircosmetics/" target="_blank" rel="noreferrer">
                        <img className="social insta" src={`${currentSlide === 0 ? insta_WHITE : insta}`} alt="instagram logo"/>
                    </a>
                   
                </div>
                
                <div className="hamburger" onClick={hamburgerAction}>
                    <span 
                    className={` ${currentSlide === 0 ? "spanWhite": "spanBlack"}`} 
                    style = { isActiveHamburger? rotateDown : null}></span>

                    <span 
                    className={` ${currentSlide === 0 ? "spanWhite": "spanBlack"}`} 
                    style = { isActiveHamburger? {opacity: "0"}: null}></span>

                    <span 
                    className={` ${currentSlide === 0 ? "spanWhite": "spanBlack"}`} 
                    style = { isActiveHamburger? rotateUp : null}></span>
                </div>

                <Sidebar isActiveHamburger= {isActiveHamburger}/>
            </div>
        </div>
    )
}

export default Header;