import React, { Component } from "react"
import "./style.css"

class RegistrationForm extends Component {
  constructor() {
    super()

    this.title = ''
  }

  handleChangeTitle(event) {
    this.title = event.target.value
    console.log(this.title)
  }

  render() {
    return (
      <form className="registration-form" onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
          onChange={this.handleChangeTitle.bind(this)}
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
