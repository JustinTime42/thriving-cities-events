import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const EmailModal = ({show, handleSignupModal, eventTitle}) => {

    let titleText = "Sign up for our email newsletter!"
    let bodyText = "We'll keep you in the loop on exciting events and important announcements!"
    let buttonText = "Subscribe to Newsletter"
    if(eventTitle){
        titleText = `Attending ${eventTitle}? Let us know!`
        bodyText = `We'll keep you updated about ${eventTitle} and other exciting events`
        buttonText = `RSVP to ${eventTitle}`
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
                            <form action="https://thrivingcities.us18.list-manage.com/subscribe/post" method="POST">
                                <input type="hidden" name="u" value="4d2c496da320e904fb58c79f7" />
                                <input type="hidden" name="id" value="aae2c64170" />
                                
                            
                                <div id="mergeTable" className="mergeTable">
                                    <div className="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
                                        <label htmlFor="MERGE0">Email Address <span className="req asterisk">*</span></label>
                                        <div className="field-group">
                                            <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25"  />
                                        </div>
                                    </div>
                                    <div className="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
                                        <label htmlFor="MERGE1">First Name</label>
                                        <div className="field-group">
                                            <input type="text" name="MERGE1" id="MERGE1" size="25" />
                                        </div>
                                    </div>    
                                </div>
                                <div className="submit_container clear">
                                    <input type="submit" className="formEmailButton" name="submit" value={buttonText} />
                                    <button onClick={onClose}>Close</button>
                                </div>
                                <input type="hidden" name="ht" value="e74c25124303c6fc63c534d28966e318531cbdb6:MTUyNjY4MjgyMi45MTA0" />
                                <input type="hidden" name="mc_signupsource" value="hosted" />
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

