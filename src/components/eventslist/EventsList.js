import React from 'react'
import EventCard from '../eventcard/EventCard.js'

const EventsList = ({ eventList, handleSignupModal, handleEventModal }) => {

    
 
    return (        
        <div>       
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