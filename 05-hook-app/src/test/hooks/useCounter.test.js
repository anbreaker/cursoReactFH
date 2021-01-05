import {renderHook, act} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('pruebas en useCounter', () => {
  test('debe de retornar valores por defecto', () => {
    const {result} = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('debe de tener el counter en 100', () => {
    const {result} = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('debe incrementar el counter en 1', () => {
    const {result} = renderHook(() => useCounter(100));

    const {increment} = result.current;

    act(() => {
      increment();
    });

    const {counter} = result.current;
    expect(counter).toBe(101);
  });

  test('debe decrementar el counter en -1', () => {
    const {result} = renderHook(() => useCounter(100));

    const {decrement} = result.current;

    act(() => {
      decrement();
    });

    const {counter} = result.current;
    expect(counter).toBe(99);
  });

  test('debe resetear el counter en 100', () => {
    const {result} = renderHook(() => useCounter(100));

    const {increment, reset} = result.current;

    act(() => {
      increment();
      reset();
    });

    const {counter} = result.current;
    expect(counter).toBe(100);
  });
});
