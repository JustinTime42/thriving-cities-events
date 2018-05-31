import React, {Image} from 'react'
import './navbar.css'
import logo from '../../logo.png'


const NavBar = ({handleSignupModal}) => {

    const emailClick = () => {
        handleSignupModal()
    }
    const onClick = () => {
        let burgerID = document.getElementById("burgerButton")
        burgerID.classList.toggle("is-active")
        if (burgerID.classList.contains("is-active")){            
            document.getElementById("navBar").style.height="100%"                  
        } else {
            document.getElementById("navBar").style.height="60px"            
        }
    }
    return (
       
        <header id="navBar">
            <div className="topnav">
                <img src={logo} alt="Thriving Cities Logo" />
                <h2>Thriving Cities Events</h2>
                <button id="burgerButton" className="hamburger hamburger--spin" type="button" onClick={onClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>                     
                </button>                  
            </div>
            <nav className="small-nav">
                <div>
                    <a href="http://thrivingcities.com" target="_blank">Visit Thriving Cities website</a>
                </div>
                <div>
                    <a href="http://eepurl.com/dv5RL9" target="_blank">Get Our Email Newsletter</a>
                </div>
            </nav>            
                  
        </header>     
    )
}

export default NavBar