export { DATE, ALPHABETICALLY } from '../../redux/filters/filter-notes.types';

export const selectFilter = (notes, { text, sortBy }) => {
    return notes.filter((note) => note.noteTitle.toLowerCase().includes(text)).sort((a, b) => {
        if (sortBy === 'date') {
            return b.createdAt - a.createdAt
        } else if (sortBy === 'alphabetically') {
            const valueA = a.noteTitle.toLowerCase();
            const valueB = b.noteTitle.toLowerCase();
            if (valueA < valueB) {
                return -1
            }
            if (valueA > valueB) {
                return 1
            }
            else {
                return 0
            }
        }
    })
}