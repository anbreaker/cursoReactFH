import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startSaveNote} from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active: note} = useSelector((state) => state.notes);

  const handleSave = () => {
    console.log(note);

    dispatch(startSaveNote(note));
  };

  return (
    <div className="notes__appbar">
      <span>21 de enero 2021</span>

      <div>
        <button className="btn">Picture</button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
