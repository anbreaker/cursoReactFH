import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

import { uiCloseModalAction } from '../../actions/ui';
import { eventAddNey, eventClearActiveEvent, eventUpdated } from '../../actions/events';

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

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
  title: '',
  notes: '',
  start: now.toDate(),
  end: nowPlus1.toDate(),
};

export const CalendarModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const { notes, title, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) setFormValues(activeEvent);
  }, [activeEvent, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseModalAction());
    dispatch(eventClearActiveEvent());

    // Clean formvalues (modal)
    setFormValues(initEvent);
  };

  const handleStartDateChange = (event) => {
    setDateStart(event);
    setFormValues({
      ...formValues,
      start: event,
    });
  };

  const handleEndDateChange = (event) => {
    setDateEnd(event);
    setFormValues({
      ...formValues,
      end: event,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      Swal.fire('Error', 'La Fecha final debe ser mayor a la Inicial', 'error');
      return;
    }

    if (title.trim().length < 2) {
      return setTitleValid(false);
    }

    if (activeEvent) dispatch(eventUpdated(formValues));
    else {
      dispatch(
        eventAddNey({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: '123example',
            name: 'anbreaker',
          },
        })
      );
    }

    setTitleValid(true);
    closeModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo">
      <h1> Nuevo evento </h1>
      <hr />

      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            className="form-control"
            value={dateStart}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            className="form-control"
            value={dateEnd}
            minDate={dateStart}
            onChange={handleEndDateChange}
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
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="2"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          />
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
