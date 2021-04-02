import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModalAction } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Cumpleaños de Curro',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: 'red',
    notes: 'El regalo',
    user: {
      uid: '123',
      name: 'anbreaker',
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const dispatch = useDispatch();

  const onDoubleClick = (event) => {
    dispatch(uiOpenModalAction());
  };

  const onSelectEvent = (event) => {
    //
    // console.log(event);
  };

  const onViewChange = (event) => {
    setLastView(event);
    localStorage.setItem('lastView', event);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: 'crimson',
      borderRadius: '10px',
      opacity: 0.8,
      display: 'block',
      color: 'azure',
    };

    return { style };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{ event: CalendarEvent }}
      />

      <CalendarModal />
    </div>
  );
};
