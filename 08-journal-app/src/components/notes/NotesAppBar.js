import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startSaveNote, startUploading} from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const {active: note} = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePicutreUpload = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) dispatch(startUploading(file));
  };

  return (
    <div className="notes__appbar">
      <span>21 de enero 2021</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{display: 'none'}}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePicutreUpload}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
