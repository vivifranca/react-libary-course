import React, { Component } from 'react'

class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Your note'></textarea>
        <button>Add note</button>
      </form>
    )
  }
}

export default RegistrationForm
