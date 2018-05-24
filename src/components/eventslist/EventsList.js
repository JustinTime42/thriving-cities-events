import React from 'react'
import EventCard from '../eventcard/EventCard.js'

const EventsList = ({ eventList, handleSignupModal }) => {
 
    return (        
        <div>       
            {
                eventList.map(event => {
                    console.log(event)
                    return (            
                        <EventCard handleSignupModal={handleSignupModal} event={event} />
                     )
                })
            }
        </div>
    )
}

export default EventsList