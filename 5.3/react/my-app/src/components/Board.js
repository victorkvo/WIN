import React, { Component } from "react";
import "../css/Board.css";
import Note from "./Note";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  // adds a new note
  addNote() {
    let notes = this.state.notes;
    notes.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }

 // // passing in the id of the notecard from which the 'delete button' was clicked
 deleteNote(id){
  // // creating a new var that holds current notes
  let newNoteArr = this.state.notes;
  // // mapping through array of all notes that's saved in our state, passing in the current note along with the index of that current note
  newNoteArr.map((note, index) => {
    // at ever note (from the array in our state) we check to see if the id passed in matches the id of the note we're currently on
    if (id === note.id) {
      // // if it matches we're removing just one item from that array
      newNoteArr.splice(index,1);
    }
  });
  // // our array now has the same elements minus the one we just deleted
  // // update our state to show that new array which will trigger a re-render
  this.setState(
    {
      notes: newNoteArr
    }
  );
}

 

  // render function
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map((note) => {
              return <Note key={note.id} id={note.id} deleteHandler={this.deleteNote.bind(this)} />;
            })}
          </div>
        </div>
        <div>
          {/* button */}
          <button
            className="btn btn-success add-button"
            onClick={this.addNote.bind(this)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Board;


