import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import { LoginScreen } from '../../../components/auth/LoginScreen';

const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

// Nuestro store
let store = mockStore(initState);

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe('Pruebas en LoginScreen', () => {
  // Limpiar las acciones o dispatch que almacena el store
  beforeEach(() => {
    store = mockStore(initState);
  });

  test('debe mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
