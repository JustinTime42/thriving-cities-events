import React from 'react'
import './navbar.css'

const NavBar = () => {
    const onClick = () => {
        let burgerID = document.getElementById("burgerButton")
        burgerID.classList.toggle("is-active")
        if (burgerID.classList.contains("is-active")){            
            document.getElementById("test").style.height="100%"
            
        } else {
            document.getElementById("test").style.height="40px"
           
        }
    }
    return (
        <header id="test" className="topnav">
            <h3>Thriving Cities Events</h3>
            <div>
            <button id="burgerButton" className="hamburger hamburger--spin" type="button" onClick={onClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>              
                <nav>
                    <div>
                        <a href="http://thrivingcities.com/">Thriving Cities Homepage</a>
                    </div>
                    <div>
                        <a href="http://thrivingcities.com/">Thriving Cities Homepage2</a>
                    </div>
                </nav>
            </button>
            </div>
        </header>
    )
}

export default NavBar