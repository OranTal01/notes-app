
export const removeNoteUtils = (notes, noteToRemove) => {
    return notes.filter((note) => note.id !== noteToRemove)
};

export const editNoteUtils = (notes, id, noteToEdit) => {
    return notes.map((note) => {
        if (note.id === id) {
            return { ...note, ...noteToEdit }
        } else {
            return note
        }
    });
};