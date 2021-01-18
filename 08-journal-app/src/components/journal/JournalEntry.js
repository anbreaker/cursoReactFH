import React from 'react';
import dayjs from 'dayjs';
// advancedFormat permite usar la fecha ordinal entre otras opciones
import advancedFormat from 'dayjs/plugin/advancedFormat';
import {activeNote} from '../../actions/notes';
import {useDispatch} from 'react-redux';
dayjs.extend(advancedFormat);

export const JournalEntry = ({id, date, title, body, url}) => {
  const dispatch = useDispatch();
  const noteDay = dayjs(date);

  const handleEntryClick = () => {
    //dispath
    dispatch(activeNote(id, {id, date, title, body, url}));
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{dayjs(date).format('dddd')}</span>
        <h4>{noteDay.format('Do')}</h4>
      </div>
    </div>
  );
};
