import React from 'react';
import NotesList from '../../components/notes-list/notes-list.components';
import NotesFilter from '../../components/notes-filter/notes-filter.component';
import './notes.page.style.scss';

const NotesPage = () => {
    return (
        <div>
            <NotesFilter />
            <NotesList />
        </div>
    );
};

export default NotesPage;