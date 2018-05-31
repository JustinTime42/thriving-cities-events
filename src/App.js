import React, { Component } from 'react'
import EventModal from './components/eventmodal/EventModal'
import EventsList from './components/eventslist/EventsList'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showEventModal: false,
      eventList:[],
      selectedEvent: {},
    }
  }

  //displays or hides the event modal
  handleEventModal = (event) => {
    this.setState({showEventModal: !this.state.showEventModal})
    if (event) {
      this.setState({selectedEvent: event})
    }     
  }

  //fetches the event list from ElegantCMS
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
        <EventModal
          show={this.state.showEventModal}
          handleEventModal={this.handleEventModal}
          selectedEvent={this.state.selectedEvent}
        />
        <Navbar />
        <Intro />
        <EventsList
          eventList={this.state.eventList}
          handleEventModal={this.handleEventModal}
        />
      </div>
    )
  }
}

export default App
