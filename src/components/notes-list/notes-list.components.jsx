import React from 'react';
import { connect } from 'react-redux';
import NoteItem from '../notes-item/notes-item.component';

const NotesList = ({ notes }) => {
    return (
        <div>
            { notes.map((note, index) => <NoteItem key={ index } note={ note } />) }
        </div>
    );
};

const mapStateToProps = (state) => ({
    notes: state.notes.notes
});

export default connect(mapStateToProps)(NotesList);