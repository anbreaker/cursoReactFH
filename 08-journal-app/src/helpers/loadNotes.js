import { db } from '../firebase/firebaseConfig';

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];

  notesSnap.forEach((snapItem) => {
    notes.push({
      id: snapItem.id,
      ...snapItem.data(),
    });
  });

  return notes;
};
