import React from 'react'
import "./intro.css"
const introText = "Thriving Cities is a group of unconventional urbanists with a unique understanding of, and approach to, cities. Thriving Cities is committed to helping scholars, foundations, city officials, religious leaders, politicians, business people, nonprofits, and residents alike answer the question, what does it mean and take to thrive in my city and how can I contribute?"

const Intro = () => {

    //displays the top introduction with video and text description of the site
    return (
        <div>
            <div className="intro">         
                <div className="intro-media-container">
                    <iframe title="Intro Video" className="intro-media" src="https://www.youtube.com/embed/5iBQG03HSeU" allow="encrypted-media" allowFullScreen></iframe>
                </div>
                <div className="intro-text"> 
                        {introText}         
                </div>
            </div>
            <nav className="big-nav">              
                <a href="http://thrivingcities.com" target="_blank">Visit Thriving Cities website</a>
                <a href="http://eepurl.com/dv5RL9" target="_blank">Get Our Email Newsletter</a>
            </nav> 
        
        </div>
    )
    
}

export default Intro