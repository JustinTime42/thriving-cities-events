import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Modal event={this.showEvent} />
        <Modal city={this.showCity} />
        <Media />
        <CitiesButton />
        <Intro />
        <CitiesList />
      </div>
    )
  }
}

export default App
