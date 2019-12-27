import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_ALPHABETICALLY } from './filter-notes.types';

const INITIAL_STATE = {
    text: '',
    sortBy: 'date',
}

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                text: action.payload
            }
        case SORT_BY_DATE:
            return {
                ...state,
                sortBy: action.payload
            }
        case SORT_BY_ALPHABETICALLY:
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}

export default filterReducer;