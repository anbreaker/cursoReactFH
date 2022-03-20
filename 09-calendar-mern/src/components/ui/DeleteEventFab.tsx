import { useDispatch } from 'react-redux';

import { eventStartDelete } from '../../store/actions/events';

export const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventStartDelete());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={handleDelete}>
      <i className="fas fa-trash"></i>

      <span> Borrar Evento</span>
    </button>
  );
};
