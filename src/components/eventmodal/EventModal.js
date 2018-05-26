import React from 'react'
import ModalMedia from './ModalMedia'
import {Modal} from 'react-bootstrap'


const EventModal = ({show, handleEventModal, selectedEvent}) => {

    const date = new Date(selectedEvent.dateandtime)  
    const timeZoneName = { timeZoneName: 'short' }
    let emailString = `mailto:${selectedEvent.email}?Subject=Regarding%20${selectedEvent.title}`

    const onClose = () => {
        handleEventModal()
    }

    if (show) {
        return (
            <div className="static-modal">
                <Modal show={show} onHide={onClose}>
                    <Modal.Header>
                        <Modal.Title style={{textAlign: "center"}}>{selectedEvent.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>  
                        <ModalMedia selectedEvent={selectedEvent} /> 
                        <div className="date"><p>{date.toLocaleString('en-US',timeZoneName)}</p></div>
                        <div className="location"><p>{selectedEvent.location}</p></div>                       
                        {selectedEvent.description}  
                        <a href={emailString} target="_top">Email Us</a>
                        <div className="signupLink">
                        <a href="http://eepurl.com/dv5RL9">Attend {selectedEvent.title}</a>"
                        </div>                    
                    </Modal.Body>                    
                </Modal>
            </div>
        )
    }   
    return null
}

export default EventModal
