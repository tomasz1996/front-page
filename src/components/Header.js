import React, { useState } from 'react';
import  './Header.css';
import logo from '../images/logo_KEUNE.svg';
import fb from '../images/fb.svg';
import insta from '../images/insta.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/yt.svg';
import Sidebar from './Sidebar';

// import { Link } from 'react-router-dom'


const Header = (props) => {

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

// const moveIn = { 
//     right:"0px",
//     // Ternary removed flashing backgrounds on menu items when oversizing
//     background : isActiveHamburger? "white" : " none"
// };
// const moveOut = { 
//     right:"-250px",
// };


    return(
        <div className="container">
            <div className="kenueLogoWrapper">
                <img className="kenueLogoImg" src={logo} alt="KENUE LOGO" />
            </div>

            <div className="menuWrapper">

                <div className="items" 
                // style = { isActiveHamburger? moveIn : moveOut}
                >

                    <div className="item nowosci">
                        <p>Nowosci</p>
                    </div>
                    
                    <div className="item produkty" onClick = {showDropdown}>
                        <p>Produkty</p>
                        <span className="material-icons-outlined productArrow" onClick = {showDropdown}>expand_more</span>

                        <div className="productDropdown" 
                        style = {{display: `${dropdown? "block": 'none'}`}}
                        >
                            <div className="dropdownItem">Produkt 1</div>
                            <div className="dropdownItem">Produkt 2</div>
                            <div className="dropdownItem">Produkt 3</div>
                            <div className="dropdownItem">Produkt 4</div>
                            <div className="dropdownItem">Produkt 5</div>
                        </div>
                    </div>
                    <div className="item trendy">
                        <p>Trendy</p>
                    </div>
                    <div className="item oFirmie">
                        <p>O firmie</p>
                    </div>
                    <div className="item salony">
                        <p>Salony</p>
                    </div>
                    <div className="item dystrybutorzy">
                        <p>Dystrybutorzy</p>
                    </div>
                    <div className="item kontakt">
                        <p>Kontakt</p>
                    </div>
                </div>
                
                <div className="socials">
                    {/* <svg className="facebook"> 
                        <use style={{color: "red"}} href="./src/images/fb.svg"></use>
                    </svg> */}
                    <a href="https://www.facebook.com/KeuneHaircosmetics/" target="_blank">
                        <img className="social fb" src={fb} alt="facebook logo"/>
                    </a>
                    <a href="https://www.twitter.com/KeuneUK/" target="_blank">
                        <img className="social twitter" src={twitter} alt="twitter logo"/>
                    </a>
                    <a href="https://www.youtube.com/KeuneHaircosmetics/" target="_blank">
                        <img className="social youtube" src={youtube} alt="youtube logo"/>
                    </a>
                    <a href="https://www.instagram.com/KeuneHaircosmetics/" target="_blank">
                        <img className="social insta" src={insta} alt="instagram logo"/>
                    </a>
                   
                </div>
                
                <div className="hamburger" onClick={hamburgerAction}>
                    <span className="span1" style = { isActiveHamburger? rotateDown : null}></span>
                    <span className="span2" style = { isActiveHamburger? {opacity: "0"}: null}></span>
                    <span className="span3"style = { isActiveHamburger? rotateUp : null}></span>
                </div>

                <Sidebar isActiveHamburger= {isActiveHamburger}/>
            </div>
        </div>
    )
}

export default Header;