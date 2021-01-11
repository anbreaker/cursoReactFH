import React from 'react';

export const JournalEntry = () => {
  const url = 'url(https://n9.cl/gvkp)';
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: url,
        }}></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un Nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
