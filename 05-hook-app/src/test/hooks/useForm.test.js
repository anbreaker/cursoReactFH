import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('pruebas en UseForm', () => {
  const initialStateForm = {
    name: 'anbreaker',
    email: 'anbreaker@gmail.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    const {result} = renderHook(() => useForm(initialStateForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialStateForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const {result} = renderHook(() => useForm(initialStateForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'anbreaker',
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({...initialStateForm, name: 'anbreaker'});
  });

  test('debe de restablecer el formulario con RESET ', () => {
    const {result} = renderHook(() => useForm(initialStateForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'anbreaker',
        },
      });
      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialStateForm);
  });
});
