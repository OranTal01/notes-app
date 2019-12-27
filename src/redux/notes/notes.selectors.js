import { createSelector } from 'reselect';

const selectNotes = (state) => state.notes

export const selectNotesItems = createSelector([selectNotes], (notes) => notes.notesItems)