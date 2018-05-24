import React from 'react'
import EventCard from '../eventcard/EventCard.js'

const EventsList = ({ eventList, handleSignupModal }) => {
 
    return (        
        <div>       
            {
                eventList.map(event => {                    
                    return (            
                        <EventCard key={event.title} handleSignupModal={handleSignupModal} event={event} />
                     )
                })
            }
        </div>
    )
}

export default EventsList