import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../store/actions/auth';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange]: any = useForm({
    loginEmail: 'test@test.com',
    loginPassword: 'test',
  });

  const { loginEmail, loginPassword }: any = formLoginValues;

  const [formRegisterValues, handleRegisterInputChange]: any = useForm({
    regName: 'anbreaker',
    regEmail: 'test@test.com',
    regPassword1: 'test',
    regPassword2: 'test',
  });

  const { regName, regEmail, regPassword1, regPassword2 }: any = formRegisterValues;

  const handleLogin = (event: any) => {
    event.preventDefault();

    dispatch(startLogin(loginEmail, loginPassword));
  };

  const handleRegister = (event: any) => {
    event.preventDefault();

    if (regPassword1 !== regPassword2)
      Swal.fire('Error', 'Las contraseñas deben coincidir', 'error');

    dispatch(startRegister(regName, regEmail, regPassword1));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="regName"
                value={regName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="regEmail"
                value={regEmail}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="regPassword1"
                value={regPassword1}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="regPassword2"
                value={regPassword2}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
