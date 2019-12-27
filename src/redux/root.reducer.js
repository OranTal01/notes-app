import { combineReducers } from 'redux';
import notesReducer from './notes/notes.reducer';
import filterReducer from './filters/filter-notes.reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    filter: filterReducer
});

export default rootReducer;