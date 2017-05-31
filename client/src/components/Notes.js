import React, { Component } from 'react';
import { getNotes } from '../actions/notes';
// if no default in the file importing from, we use {} around what we are importing
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Notes extends Component {

  componentDidMount() {
    this.props.dispatch(getNotes());
  }

  displayNotes = () => {
    let notes = this.props.notes.map( note => {
     return (
       <li key={note._id} className="collection-item">
         <div>
           { note.title }
           <span className="secondary-content">
             <Link to={`/notes/${note._id}`}>
               <i className="material-icons">send</i>
             </Link>
           </span>
         </div>
       </li>
     )
   });
  }

  render() {
    return (
      <div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { notes: state.notes };
}

export default connect(mapStateToProps)(Notes);

//example redux store
// {
//   notes: [{}, {}, {}],
//   user: {name:'jake', age:27, gender:'Male'},
//   cars:[ {}, {}, {} ]
// }
