import moment from 'moment';

export const datesEvents = (events = []) => {
  return events.map((event: any) => ({
    ...event,
    end: moment(event.end).toDate(),
    start: moment(event.start).toDate(),
  }));
};
