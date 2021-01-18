import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {activeNote} from '../../actions/notes';
import {useForm} from '../../hooks/useForm';
import {NotesAppBar} from './NotesAppBar';

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const {active: note} = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const {body, title} = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, {...formValues}));
  }, [dispatch, formValues]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Some awesome Title"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/246/312/non_2x/mountain-lake-sunset-landscape-first-person-view-vector.jpg"
              alt="imagen"
            />
          </div>
        )}
      </div>
    </div>
  );
};
