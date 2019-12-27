import { SET_TEXT_FILTER, SORT_BY_DATE, SORT_BY_ALPHABETICALLY, DATE, ALPHABETICALLY } from './filter-notes.types';

export const setTextFilter = (text) => ({
    type: SET_TEXT_FILTER,
    payload: text
});

export const sortByDate = () => ({
    type: SORT_BY_DATE,
    payload: DATE
});

export const sortByAlphabetically = () => ({
    type: SORT_BY_ALPHABETICALLY,
    payload: ALPHABETICALLY
});