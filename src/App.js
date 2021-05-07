import React, { Component } from 'react'
import ListNotes from './components/ListNotes'
import RegistrationForm from './components/RegistrationForm'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  render () {
    return (
      <section className="content">
        <RegistrationForm />
        <ListNotes />
      </section>
    )
  }
}

export default App
