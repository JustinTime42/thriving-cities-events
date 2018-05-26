import React from 'react'
import { Carousel } from 'react-bootstrap'
import './eventmodal.css'

const ModalMedia = ({selectedEvent}) => 
{
    return (
        <Carousel>
            {
                selectedEvent.images.map((image, i) => {
                    return (
                        <Carousel.Item className="carousel" key={image.title}>
                            <img alt={image.title} src={image.url} />
                        </Carousel.Item>
                    )
                })
            } 
            
        </Carousel>
    )
}

export default ModalMedia
