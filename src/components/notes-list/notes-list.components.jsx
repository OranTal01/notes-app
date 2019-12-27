import React from 'react';
import { connect } from 'react-redux';
import NoteItem from '../notes-item/notes-item.component';
import { selectFilter } from './select-notes.utils';

const NotesList = ({ notes }) => {
    return (
        <div>
            { notes.map((note, index) => <NoteItem key={ index } note={ note } />) }
        </div>
    );
};

const mapStateToProps = (state) => ({
    notes: selectFilter(state.notes.notes, state.filter)
});

export default connect(mapStateToProps)(NotesList);