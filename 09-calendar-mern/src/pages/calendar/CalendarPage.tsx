import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useEffect, useState } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarModal } from './CalendarModal';
import { CalendarEvent } from './CalendarEvent';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../store/actions/uiActions';
import {
  eventClearActive,
  eventSetActive,
  eventStartLoading,
} from '../../store/actions/events';
import { AddNewFab } from '../../components/ui/AddNewFab';
import { DeleteEventFab } from '../../components/ui/DeleteEventFab';

const localizer = momentLocalizer(moment); // or globalizeLocalizer
moment.locale('es');

// const events = [
//   {
//     title: 'Cumple',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Comprar tarta',
//     user: {
//       _id: '123',
//       name: 'anbreaker',
//     },
//   },
// ];

export const CalendarPage = () => {
  const dispatch = useDispatch();

  const { uid } = useSelector((state: any) => state.auth);

  const { events, activeEvent } = useSelector((state: any) => state.calendar);

  const [lastView, setLastView]: any = useState(
    localStorage.getItem('lastView') || 'month'
  );

  useEffect(() => {
    dispatch(eventStartLoading('kk'));
  }, [dispatch]);

  const onDoubleClick = (event: any) => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (event: any) => {
    console.log(event);
    dispatch(eventSetActive(event));
  };

  const onViewChange = (event: any) => {
    setLastView(event);

    localStorage.setItem('lastView', event);
  };

  const eventStyleGetter = (event: any, start: any, end: any, isSelected: boolean) => {
    const style = {
      backgroundColor: uid === event.user._id ? '#367cf7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'aliceblue',
    };

    return {
      style,
    };
  };

  const onSelectSlot = (event: any) => {
    dispatch(eventClearActive());
  };

  return (
    <div className="calendar-page">
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
        onSelectSlot={onSelectSlot}
        selectable={true}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab />

      {activeEvent && <DeleteEventFab />}

      <CalendarModal />
    </div>
  );
};
