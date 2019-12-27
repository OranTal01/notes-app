import React from 'react';
import { connect } from 'react-redux';
import NoteItem from '../notes-item/notes-item.component';
import { selectFilter } from './select-notes.utils';
import { filterSelectorItems } from '../../redux/filters/filter-notes.selectors';
import { selectNotesItems } from '../../redux/notes/notes.selectors';


const NotesList = ({ notes }) => {
    return (
        <div>
            { notes.map((note, index) => <NoteItem key={ index } note={ note } />) }
        </div>

    );
};

const mapStateToProps = (state) => ({
    notes: selectFilter(selectNotesItems(state), filterSelectorItems(state))
});

export default connect(mapStateToProps)(NotesList);