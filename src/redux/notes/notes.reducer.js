import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from './notes.types';
import { removeNoteUtils, editNoteUtils } from './notes.utils';
const INITIAL_STATE = {
    notes: []
}

const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case REMOVE_NOTE:
            return {
                ...state,
                notes: removeNoteUtils(state.notes, action.payload)
            }
        case EDIT_NOTE:
            return {
                ...state,
                notes: editNoteUtils(state.notes, action.id, action.payload)
            }
        default:
            return state
    };
};

export default notesReducer;