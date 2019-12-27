import { createSelector } from 'reselect';

const filterSelector = (state) => state.filter

export const filterSelectorItems = createSelector([filterSelector], (filter) => filter)