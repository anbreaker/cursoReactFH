import React from 'react';
import {NotesAppBar} from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome Title"
          autoComplete="off"
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"></textarea>

        <div className="notes__image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/246/312/non_2x/mountain-lake-sunset-landscape-first-person-view-vector.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
