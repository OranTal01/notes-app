import { ADD_NOTE, REMOVE_NOTE, EDIT_NOTE } from './notes.types';
import { removeNoteUtils, editNoteUtils } from './notes.utils';
const INITIAL_STATE = {
    notesItems: []
}

const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notesItems: [...state.notesItems, action.payload]
            }
        case REMOVE_NOTE:
            return {
                ...state,
                notesItems: removeNoteUtils(state.notesItems, action.payload)
            }
        case EDIT_NOTE:
            return {
                ...state,
                notesItems: editNoteUtils(state.notesItems, action.id, action.payload)
            }
        default:
            return state
    };
};

export default notesReducer;