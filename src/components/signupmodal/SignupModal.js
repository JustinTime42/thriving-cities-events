import React from 'react'
import {Modal} from 'react-bootstrap'

const EmailModal = ({show, handleSignupModal, selectedEvent}) => {

    let titleText = "Sign up for our email newsletter!"
    let bodyText = "We'll keep you in the loop on exciting events and important announcements!"
    if(selectedEvent){
        titleText = `Attending ${selectedEvent.title}? Let us know!`
        bodyText = `We'll keep you updated about ${selectedEvent.title} and other exciting events`
    }

    const onClose = () => {
        handleSignupModal()
    }

    if (show) {
        return (
            <div className="static-modal">
                <Modal show={show} onHide={onClose}>
                    <Modal.Header>
                    <Modal.Title style={{textAlign: "center"}}>{titleText}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div><p>{bodyText}</p></div>
                        <div >
                            <form action="https://168.us18.list-manage.com/subscribe/post?u=4d2c496da320e904fb58c79f7&amp;id=aae2c64170" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">                                    
                                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-FNAME">First Name </label>
                                        <input type="text" name="FNAME" className="" id="mce-FNAME"/>
                                    </div>
                                    <div className="mc-field-group input-group">
                                        <strong>Events </strong>
                                        <p>Plan on attending one of these events? Check the boxes below to RSVP. We'll put you on the list and keep you updated with important information. See you there!</p>
                                        <ul>
                                            <li><input type="checkbox" value="1" name="group[1229][1]" id="mce-group[1229]-1229-0"/><label htmlFor="mce-group[1229]-1229-0">Thriving Cities Event</label></li>
                                            <li><input type="checkbox" value="2" name="group[1229][2]" id="mce-group[1229]-1229-1"/><label htmlFor="mce-group[1229]-1229-1">Another Great Event</label></li>
                                        </ul>
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                                        <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                                    </div>    
                                    <div aria-hidden="true" style={{display:"none"}}><input type="text" name="b_4d2c496da320e904fb58c79f7_aae2c64170" tabIndex="-1" value=""/></div>
                                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                                    <input type="button" onClick={onClose} value="Close" />
                                </div>
                            </form>                    
                        </div>
                    </Modal.Body>                    
                </Modal>
            </div>
        )
    }   
    return null
}

export default EmailModal

