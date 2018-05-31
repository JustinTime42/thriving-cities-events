import React from 'react'
import Interweave from 'interweave'
import ModalMedia from './ModalMedia'
import {Modal} from 'react-bootstrap'
import './eventmodal.css'

const EventModal = ({show, handleEventModal, selectedEvent}) => {

    //display date and time in user-friendly format
    let date = new Date(selectedEvent.dateandtime).toDateString()
    let time = new Date(selectedEvent.dateandtime).toLocaleTimeString('en-US', { timeZoneName: "short", hour: "2-digit", minute: "2-digit" })
    let mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDjs59UzcY-9HOaLR6-3YpEiIcw8PvCv3k&q=${selectedEvent.location}`
    let mapButtonText = "Show Map"

    //close modal
    const onClose = () => {
        handleEventModal()
    }

    //show/hide map
    const onShowMap = () => {
        document.getElementById('event-map').classList.toggle("show")
        if (mapButtonText === "Show Map") {
            mapButtonText = "Hide Map"
            document.getElementById("mapButton").value = "Hide Map"
            document.getElementById("event-map").scrollIntoView()
        } else {
            mapButtonText = "Show Map"
            document.getElementById("mapButton").value = "Show Map"
        }
    }

    if (show) {
        return (    
           <div className="static-modal">
                <Modal show={show} onHide={onClose} bsSize="large">
                    <Modal.Header>
                        <Modal.Title style={{textAlign: "center"}}>{selectedEvent.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                        <ModalMedia selectedEvent={selectedEvent} /> 
                        <div className="details">
                            <div className="modal-detail">
                                <p>{date} at {time}</p>
                                <Interweave tagName="div" content={selectedEvent.calendar} />
                            </div>                            
                            <div className="modal-detail">
                                <p>{selectedEvent.location}</p>
                                <input className="button map-button" type="button" id="mapButton" onClick={onShowMap} value="Show Map" />
                            </div> 
                            <a href={selectedEvent.mailchimp}>Attend {selectedEvent.title}</a>                           
                        </div>                        
                        <iframe id="event-map" frameBorder="0" className="test hide" src={mapUrl} allowFullScreen></iframe>           
                        <div><p>{selectedEvent.description}</p></div>   
                        <div className="close-button">
                            <input className="button" type="button" onClick={onClose} value="Close" />
                        </div>                 
                    </Modal.Body>                    
                </Modal>
            </div>
        )
    }   
    return null
}

export default EventModal