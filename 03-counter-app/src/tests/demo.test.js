describe('Pruebas en el archivo dem.test.js', () => {
  test('Deben ser iguales los strings', () => {
    // 1. Inicialización
    const mensaje = 'Hola Mundo';

    // 2. estímulo
    const mensaje2 = `Hola Mundo`;

    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
