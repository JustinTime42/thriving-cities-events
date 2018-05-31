import React from 'react'
import EventCard from '../eventcard/EventCard.js'
import './eventlist.css'

const EventsList = ({ eventList, handleSignupModal, handleEventModal }) => {
 
    return (        
        <div className="card-list">       
            {
                eventList.map(event => {                    
                    return (            
                        <EventCard key={event.title} handleSignupModal={handleSignupModal} event={event} handleEventModal={handleEventModal} />
                     )
                })
            }
        </div>
    )
}

export default EventsList