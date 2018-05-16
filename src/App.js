import React, { Component } from 'react'
// import CityModal from './components/citymodal/CityModal'
// import CitiesButton from './components/citiesbutton/CitiesButton'
// import CitiesList from './components/citieslist/CitiesList'
// import EventModal from './components/eventmodal/EventModal'
// import Intro from './components/intro/Intro'
// import MediaHome from './components/mediahome/MediaHome'
import Navbar from './components/navbar/NavBar'
import './App.css'

class App extends Component {
  toggleMenu = () => {
    
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <EventModal event={this.showEvent} />
        <CityModal city={this.showCity} />
        <MediaHome />
        <CitiesButton />
        <Intro />
        <CitiesList /> */}
      </div>
    )
  }
}

export default App
