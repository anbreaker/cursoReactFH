import React from 'react';
import {useSelector} from 'react-redux';
import {JournalEntry} from './JournalEntry';

export const JournalEntries = () => {
  const {notes} = useSelector((state) => state.notes);
  console.log(notes);

  return (
    <div className="journal__entries">
      console.log(notes)
      {notes.map((note) => (
        <JournalEntry key={note.id} {...note} />
      ))}
    </div>
  );
};
