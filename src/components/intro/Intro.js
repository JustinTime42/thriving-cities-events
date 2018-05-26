import React from 'react'
import "./intro.css"
const Intro = () => {

    return (
        <div className="card">
         
            <div className="media-container">
               <iframe title="Intro Video" className="resp-media" src="https://www.youtube.com/embed/5iBQG03HSeU" allow="encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="cardText">
                <div className="signupLink">
                    <a href="http://eepurl.com/dv5RL9">Sign up for our NewsLetter</a>"
                </div>
                <div className="test">
                Thriving Cities is a group of unconventional urbanists with a unique understanding of, and approach to, cities.

Thriving Cities is committed to helping scholars, foundations, city officials, religious leaders, politicians, business people, nonprofits, and residents alike answer the question, what does it mean and take to thrive in my city and how can I contribute?
                </div>
            </div>
            
        </div>
    )
    
}

export default Intro