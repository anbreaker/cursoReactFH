import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { uiCloseModal } from '../../store/actions/uiActions';
import {
  eventStartAddnew,
  eventClearActive,
  eventUpdated,
} from '../../store/actions/events';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const startDate = moment().minutes(0).seconds(0).add(1, 'hours');
const startDatePlus1 = startDate.clone().add(1, 'hours');

type InitEvent = {
  title: string;
  notes: string;
  start: Date;
  end: Date;
};

const initEvent: InitEvent = {
  title: '',
  notes: '',
  start: startDate.toDate(),
  end: startDatePlus1.toDate(),
};

export const CalendarModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state: any) => state.ui);
  const { activeEvent } = useSelector((state: any) => state.calendar);

  const [dateStart, setDateStart] = useState(startDate.toDate());

  const [dateEnd, setDateEnd] = useState(startDatePlus1.toDate());

  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const { notes, title, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent, setFormValues]);

  const handleInputChange = (event: any) => {
    const { target } = event;

    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseModal());

    dispatch(eventClearActive());

    setFormValues(initEvent);
  };

  const handleStartDateChange = (event: any) => {
    setDateStart(event);

    console.log(event);

    setFormValues({
      ...formValues,
      start: event,
    });
  };

  const handleEndtDateChange = (event: any) => {
    setDateEnd(event);

    setFormValues({
      ...formValues,
      end: event,
    });
  };

  const handleSubmitForm = (event: any) => {
    event.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      Swal.fire('Error', 'Fecha final ha de ser mayor a la inicial.', 'error');
      return;
    }

    if (title.trim().length < 2) return setTitleValid(false);

    if (activeEvent) {
      dispatch(eventUpdated(formValues));
    } else {
      dispatch(eventStartAddnew({ ...formValues }));
    }

    setTitleValid(true);
    closeModal();
  };

  //Validate Dates
  const yesterday = moment(dateStart).subtract(1, 'day');

  const valid = (current: any) => {
    return current.isAfter(yesterday);
  };

  return (
    <Modal
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Modal</h2>
      <hr />

      <h1> {activeEvent ? 'Editar Evento' : 'Nuevo evento'} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>

          <DatePicker
            // className="form-control"
            dateFormat="DD-MM-YYYY"
            timeFormat="hh:mm A"
            onChange={handleStartDateChange}
            value={start}
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>

          <DatePicker
            // className="form-control"
            dateFormat="DD-MM-YYYY"
            timeFormat="hh:mm A"
            onChange={handleEndtDateChange}
            isValidDate={valid}
            value={end}
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Notas"
            rows={2}
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
