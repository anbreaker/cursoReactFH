import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { ActionsTypes } from '../../types/actions';

export const Navbar = () => {
  const navigate = useNavigate();

  const { user, dispatch }: any = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: ActionsTypes.LOGOUT });

    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Associations
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {/* To use change classes with isActive */}
          {/* <NavLink className={({isActive}) => 'nav-item nav-link' + (isActive ? 'active': '')} to="/marvel"> */}
          <NavLink className="nav-item nav-link" to="/marvel">
            Marvel
          </NavLink>

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>

          <NavLink className="nav-item nav-link" to="/search">
            search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="btn nav-item nav-link" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
