import React, { Component } from 'react'
import SignupModal from './components/signupmodal/SignupModal'
import EventsList from './components/eventslist/EventsList'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/NavBar'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showSignupModal: false,
      showEventModal: false,
      eventList:[],
      selectedEvent: {},
    }
  }

  handleSignupModal = (event) => {
    this.setState({showSignupModal: !this.state.showSignupModal})
    this.setState({selectedEvent: event})
  }

  handleEventModal = () => {
    this.setState({showEventModal: !this.state.showEventModal})
  }

  componentDidMount() {
    fetch("https://thrivingcities.herokuapp.com/events")
    .then(response => response.json())
    .then(events => {
      let eventsList = []
      events.forEach(event => eventsList.push(event))
      this.setState({eventList: events})
    }) 
    
  }

  render() {
    return (
      <div className="App">
        <SignupModal show={this.state.showSignupModal} handleSignupModal={this.handleSignupModal} selectedEvent={this.state.selectedEvent}/>
        <Navbar handleSignupModal={this.handleSignupModal} />
        <Intro />
        <EventsList handleSignupModal={this.handleSignupModal} eventList={this.state.eventList} />
      </div>
    )
  }
}

export default App
