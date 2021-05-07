import React, { Component } from 'react'
import ListNotes from './components/ListNotes'
import RegistrationForm from './components/RegistrationForm'

class App extends Component {
  render () {
    return (
      <section>
        <RegistrationForm/>
        <ListNotes/>
      </section>
    );
  }
}

export default App;
