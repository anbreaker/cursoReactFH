import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = ({ reset }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePicutreUpload = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) dispatch(startUploading(file));
    reset(active);
  };

  return (
    <div className="notes__appbar">
      <span>21 de enero 2021</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: 'none' }}
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
