import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const NoteForm = ({ dispatch }) => {
  let title, body, form;
//n in ref stands for node, setting a variable equal to the entire input element

  return (
    <div>
      <h5 className="center">Add A Note</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          if (title.value){
            dispatch(addNote(title.value, body.value))
          }
          form.reset();
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <textarea ref={ n => body = n } placeholder="Note Body"></textarea>
        <button className="btn">Save</button>
      </form>
    </div>
  )
}

// MSTP - grabs state out of store, pass in as a prop

export default connect()(NoteForm);
