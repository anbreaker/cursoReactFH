import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  test('Debe mostrar el mensaje', () => {
    const saludo = 'Hola, soy Goku';

    const {getByText} = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
