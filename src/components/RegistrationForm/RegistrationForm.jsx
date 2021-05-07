import React, { Component } from "react"
import "./style.css"

class RegistrationForm extends Component {
  render() {
    return (
      <form className="registration-form">
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
        />
        <textarea
          rows={15}
          placeholder="Your note..."
          className="registration-form_input"
        />
        <button className="registration-form_input registration-form_submit">
          Add Note
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
