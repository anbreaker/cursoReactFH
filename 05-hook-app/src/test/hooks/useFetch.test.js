import {renderHook} from '@testing-library/react-hooks';
import {useFetch} from '../../hooks/useFetch';

describe('pruebas en useFetch', () => {
  const url = 'https://www.breakingbadapi.com/api/quotes/1';
  const urlError = 'https://reqres.in/apid/users?page=2';

  test('debe de retornar la informacion por defecto', () => {
    const {result} = renderHook(() => useFetch(url));
    const {data, loading, error} = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('debe de tener la informacion deseada, loading false, error false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch(url));
    await waitForNextUpdate();

    const {data, loading, error} = result.current;
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('debe de manejar el error', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch(urlError));
    await waitForNextUpdate();

    const {data, loading, error} = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo cargar la informacion');
  });
});
