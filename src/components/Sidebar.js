import React, { useState }from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

    const [dropdown, setDropdown] = useState(false)
    const isActiveHamburger = props.isActiveHamburger;

    const showDropdown = () => setDropdown(!dropdown)

    const moveIn = { 
            width:"250px",
            right:"0px",
    };
    return ( 
            <div className="sidebar" 
            style = {{display: `${isActiveHamburger? "flex": 'none'}`}}
            style = { isActiveHamburger? moveIn : null}
                >

                    <div className="sidebarItem nowosci">
                        <p>Nowosci</p>
                    </div>
                    
                    <div className="sidebarItem produkty" 
                    onClick = {showDropdown}
                    >
                        <p>Produkty</p>
                        <span className="material-icons-outlined productArrow" 
                        onClick = {showDropdown} >expand_more</span>

                        <div className="productItems" 
                        style = {{display: `${dropdown? "block": 'none'}`}}
                        >
                            <div className="productItem">Produkt 1</div>
                            <div className="productItem">Produkt 2</div>
                            <div className="productItem">Produkt 3</div>
                            <div className="productItem">Produkt 4</div>
                            <div className="productItem">Produkt 5</div>
                        </div>
                    </div>
                    <div className="sidebarItem trendy">
                        <p>Trendy</p>
                    </div>
                    <div className="sidebarItem oFirmie">
                        <p>O firmie</p>
                    </div>
                    <div className="sidebarItem salony">
                        <p>Salony</p>
                    </div>
                    <div className="sidebarItem dystrybutorzy">
                        <p>Dystrybutorzy</p>
                    </div>
                    <div className="sidebarItem kontakt">
                        <p>Kontakt</p>
                    </div>
                </div>
     );
}
 
export default Sidebar;