import React from 'react';
import NotesForm from '../../components/notes-form/notes-form.component';
import { connect } from 'react-redux';
import { editNote } from '../../redux/notes/notes.actions';
import { notesItemsSelector } from '../../redux/notes/notes.selectors';
import './edit-note.style.scss';


const EditPage = (props) => {
    const handelOnSubmit = (note) => {
        props.editNote(props.note.id, note);
        props.history.push('/notes');
    }
    return (
        <div>
            <NotesForm
                note={ props.note }
                onSubmit={ handelOnSubmit } />
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    note: notesItemsSelector(state).find((note) => note.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editNote: (id, note) => dispatch(editNote(id, note))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);