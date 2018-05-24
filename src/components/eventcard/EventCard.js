import React from 'react'

const EventCard = ({ handleSignupModal, event }) => {

    let date = new Date(event.dateandtime)  
    let timeZoneName = { timeZoneName: 'short' }
    let emailString = `mailto:${event.email}?Subject=Regarding%20${event.title}`

    const emailClick = () => {
        handleSignupModal(event)
    }

    return (
        <div>
            <img src={event.images[0].url} alt={event.images[0].title} />
            <div>{date.toLocaleString('en-US',timeZoneName)}</div>
            <div>{event.location}</div>
            <h3>{event.title}</h3>
            <div>{event.description}</div>
            <input type="button" value="Attend" onClick={emailClick} />
            <a href={emailString} target="_top">Contact Us</a>
        </div>
    )
}

export default EventCard