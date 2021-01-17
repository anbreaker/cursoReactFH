import moment from 'moment';
moment.locale('es');

const format = 'dddd Do MMMM YYYY';

const hoy = moment();
const ayerHoyPorReferenciaMAL = hoy.subtract(1, 'days');
const ayer = hoy.clone().subtract(1, 'days');
const tomorrow = moment().add(1, 'days');

const fechaExacta1 = moment('2021-01-17');
const fechaExacta2 = moment([2021, 0]);

const mesDias = moment([2021, 0]).daysInMonth();

console.table({
  hoy: hoy.format(format),
  ayerHoyPorReferenciaMAL: ayerHoyPorReferenciaMAL.format(format),
  ayer: ayer.format(format),
  mañana: tomorrow.format(format),
  fechaExacta1: fechaExacta1.format(format),
  fechaExacta2: fechaExacta2.format(format),
  mesDias,
  mayor: hoy < ayer ? true : false,
});
