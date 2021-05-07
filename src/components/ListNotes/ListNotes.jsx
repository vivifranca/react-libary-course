import React, { Component } from 'react'
import NoteCard from '../NoteCard'
import './style.css'

class ListNotes extends Component {
  render() {
    return (
      <ul className='list-notes'>
        {Array.of('Work', 'Work', 'Study').map((category, index) => {
          return (
            <li className='list-notes_item' key={index}>
              <NoteCard />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListNotes