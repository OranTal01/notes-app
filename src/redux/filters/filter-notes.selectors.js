import { createSelector } from 'reselect';

const filterSelector = (state) => state.filter

export const filterItemsSelector = createSelector([filterSelector], (filter) => filter)