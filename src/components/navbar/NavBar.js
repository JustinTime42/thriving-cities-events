import React from 'react'
import './navbar.css'

const NavBar = () => {
    const onClick = () => {
        let burgerID = document.getElementById("burgerButton")
        burgerID.classList.toggle("is-active")
        if (burgerID.classList.contains("is-active")){            
            document.getElementById("navBar").style.height="100%"                  
        } else {
            document.getElementById("navBar").style.height="50px"            
        }
    }
    return (
       
        <header id="navBar">
            <div className="topnav">
                <h2>Thriving Cities Events</h2>
                <button id="burgerButton" className="hamburger hamburger--spin" type="button" onClick={onClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>   
                </button>
            </div>            
            <nav className="navLinks">
                <div>
                    <a href="http://thrivingcities.com/">Thriving Cities Homepage</a>
                </div>
                <div>
                    <a href="#">Find Your City</a>
                </div>
                <div>
                    <a href="#">Sign Up For Our Newletter</a>
                </div>
            </nav>          
        </header>     
    )
}

export default NavBar