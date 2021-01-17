import React from 'react';
import dayjs from 'dayjs';
// advancedFormat permite usar la fecha ordinal entre otras opciones
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

export const JournalEntry = ({id, date, title, body, url}) => {
  const noteDay = dayjs(date);

  return (
    <div className="journal__entry pointer">
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
