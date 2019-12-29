import { createSelector } from 'reselect';

const notesSelector = (state) => state.notes

export const notesItemsSelector = createSelector([notesSelector], (notes) => notes.notesItems)