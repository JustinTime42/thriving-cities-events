import React from 'react'
import { Carousel } from 'react-bootstrap'
import './eventmodal.css'

const ModalMedia = ({selectedEvent}) => 
//create image carousel for the event modal
{
    return (
        <Carousel>
            {
                selectedEvent.images.map((image, i) => {
                    return (
                        <Carousel.Item className="modal-media-container" key={image.title}>
                            <img className="modal-media" alt={image.title} src={image.url} />
                        </Carousel.Item>
                    )
                })
            }             
        </Carousel>
    )
}

export default ModalMedia
