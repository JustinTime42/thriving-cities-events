import React from 'react'
import './eventcard.css'

const EventCard = ({ handleSignupModal, event, handleEventModal }) => {

    let timeZoneName = { timeZoneName: 'short' }
    let date = new Date(event.dateandtime).toLocaleDateString('en-US', {weekday: "short", day: "numeric", month: "short", year: "numeric"})
    let time = new Date(event.dateandtime).toLocaleTimeString('en-US', { timeZoneName: "short", hour: "2-digit", minute: "2-digit" })
    let emailString = `mailto:${event.email}?Subject=Regarding%20${event.title}`
    let address = event

    const onEmailClick = () => {
        handleSignupModal(event)
    }

    const onEventClick = () => {
        handleEventModal(event)
    }

    return (
        <div className="card" onClick={onEventClick}>
            <h3 className="title-small">{event.title}</h3>
            <div className="media-container">
                <img className="resp-media" src={event.images[0].url} alt={event.images[0].title} />
            </div>
            <div className="cardText">
                <h3 className="title-large">{event.title}</h3>
                <div className="detail">
                    <div><h4>When:</h4></div>
                    <div><p>{date}</p></div>
                    <div><p>{time}</p></div>
                </div>
                <div className="detail">
                    <div><h4>Where:</h4></div>
                    <div><p>{event.location}</p></div>                                     
                </div>                
                <div className="shortdescription"><p>{event.shortdescription}</p></div>
                <input className="button info-button" type="button" value="More Info" onClick={onEventClick} />                
            </div>
        </div>
    )
}

export default EventCard