import { combineReducers } from 'redux';
import notesReducer from './notes/notes.reducer';
import filterReducer from './filters/filter-notes.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    filter: filterReducer,
    user: userReducer
});

export default rootReducer;