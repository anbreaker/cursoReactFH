setTimeout(() => {
  console.log('Hola Mundo, tras un setTimeout');
}, 1500);

const getUserById = (id, callback) => {
  const user = {
    nombre: 'anbreaker',
    id,
  };

  if (id === 20) {
    callback(`El usuarion con id ${id}, no existe en la DB`);
  } else {
    callback(null, user);
  }
};

getUserById(10, (error, user) => {
  if (error) return console.log(error);

  console.log('Usuario de base de Datos', user);
});

const empleados = [
  {
    id: 1,
    name: 'anbreaker',
  },
  {
    id: 2,
    name: 'Jéssica',
  },
  {
    id: 3,
    name: 'Curro',
  },
];

const salarios = [
  {
    id: 1,
    salario: 1457,
  },
  {
    id: 2,
    salario: 150,
  },
];

const getEmpleado = (id, callback) => {
  const empleadoDB = empleados.find((empleado) => empleado.id === id);

  if (!empleadoDB) {
    callback(`No existe el empleado con el ID: ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

// {
//   name: 'Magali',
//   salario: 1200
// }

// No se encontro un salario para el usuario Magali

const getSalario = (empleado, callback) => {
  const salarioDB = salarios.find((salario) => salario.id === empleado.id);

  if (!salarioDB) callback(`No se encontro un salario para el usuario ${empleado.name}`);
  else {
    callback(null, {
      name: empleado.name,
      salario: salarioDB.salario,
      id: empleado.id,
    });
  }
};

getEmpleado(1, (error, empleado) => {
  if (error) return console.log(error);

  getSalario(empleado, (error, response) => {
    if (error) return console.log(error);

    console.log(`El salario de ${response.name} es de ${response.salario}`);
  });
});
