import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header.component';
import NotesPage from './pages/notes/notes.page';
import AddNotePage from './pages/crate-note/crate-note.page';
import EditPage from './pages/edit-note/edit-note.page';

const AppRouter = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/notes' component={ NotesPage } />
                <Route path='/add-note' component={ AddNotePage } />
                <Route path='/edit-note/:id' component={ EditPage } />
            </Switch>
        </div>
    );
};

export default AppRouter;