import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from './notes.types';
import uuid from 'uuid';

export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: {
        id: uuid(),
        ...note
    }
});

export const removeNote = (id) => ({
    type: REMOVE_NOTE,
    payload: id
});

export const editNote = (id, note) => ({
    type: EDIT_NOTE,
    id,
    payload: note
});