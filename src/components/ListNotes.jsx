import React, { Component } from 'react'
import NoteCard from './NoteCard'

class ListNotes extends Component {
  render() {
    return (
      <ul>
        {
          Array.of('Work', 'Work', 'Study').map(category => {
            return (
              <li>
                <div>{category}</div>
                <NoteCard />
              </li>
            )
          })
        }

      </ul>
    )
  }
}

export default ListNotes
