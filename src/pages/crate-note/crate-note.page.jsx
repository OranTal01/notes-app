import React from 'react';
import NotesForm from '../../components/notes-form/notes-form.component';
import { addNote } from '../../redux/notes/notes.actions';
import { connect } from 'react-redux';
import './create-note.style.scss';


const AddNotePage = ({ addNote, history }) => {
    const handelOnSubmit = (note) => {
        addNote(note)
        history.push('/notes')
    }
    return (
        <NotesForm onSubmit={ handelOnSubmit } />
    );
};
const mapDispatchToState = (dispatch) => ({
    addNote: (note) => dispatch(addNote(note))
})
export default connect(undefined, mapDispatchToState)(AddNotePage);