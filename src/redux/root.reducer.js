import { combineReducers } from 'redux';
import notesReducer from './notes/notes.reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
});

export default rootReducer;