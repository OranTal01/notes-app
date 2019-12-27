import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../../redux/notes/notes.actions';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './notes-item.style.scss';


const NoteItem = ({ note, removeItem }) => {
    const { noteTitle, noteText, id, createdAt } = note
    return (
        <Link to={ `edit-note/${id}` }>
            <div>
                { `Last edited ${moment(createdAt).fromNow()}` }
            </div>
            <div>
                { noteTitle }
            </div>
            <div>
                { noteText }
            </div>
            <button onClick={ () => removeItem(id) }>Remove Note</button>
        </Link>
    );
};

const mapDispatchToProps = (dispatch) => ({
    removeItem: (id) => dispatch(removeNote(id))
})

export default connect(undefined, mapDispatchToProps)(NoteItem);