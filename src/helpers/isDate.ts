import moment from 'moment';

export const isDate = (value: any) => {
  if (!value) return false;

  const date = moment(value);

  if (date.isValid()) return true;
  return false;
};
