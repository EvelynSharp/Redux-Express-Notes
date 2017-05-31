import React from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../actions/notes';

class Note extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  deleteNote = () => {
    let { dispatch, note } = this.props;
    dispatch(deleteNote(note._id))
  }

  render() {
    let { note: { title, body, updatedAt, createdAt }} = this.props;
    return (
      <div className="container">
        <h4 className="center">{title}</h4>
        <span className="grey-text">{`Created: ${createdAt}`}</span>
        <br />
        <span className="grey-text">{`Updated: ${updatedAt}`}</span>
        <p>{body}</p>
        <div style={{ cursor: 'pointer' }}>
          <i className="blue-text material-icons" onClick={this.toggleEdit}>edit</i>
          <i className="red-text material-icons" onClick={this.deleteNote}>delete</i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n._id === props.match.params.id) || {} }
}

export default connect(mapStateToProps)(Note);
