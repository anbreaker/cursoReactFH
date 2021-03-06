import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { AddNewFab } from '../ui/AddNewFab';
import { CalendarModal } from './CalendarModal';
import { uiOpenModalAction } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const onDoubleClick = (event) => {
    dispatch(uiOpenModalAction());
  };

  const onSelectEvent = (event) => {
    dispatch(eventSetActive(event));
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

  const onSelectSlot = (event) => {
    // console.log(event);

    dispatch(eventClearActiveEvent());
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
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{ event: CalendarEvent }}
      />

      {activeEvent && <DeleteEventFab />}

      <AddNewFab onDoubleClickEvent={onDoubleClick} />
      <CalendarModal />
    </div>
  );
};
