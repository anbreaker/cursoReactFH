import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en el hook useFetchGifs', () => {
  test('deberia retornar el estado inicial', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('futurama'));
    const {data, loading} = result.current;

    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe mostrar un array de imagenes, y el loading en false', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('futurama'));
    await waitForNextUpdate();
    const {data, loading} = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
