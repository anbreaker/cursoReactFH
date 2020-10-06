const personages = ['Goku', 'Vegeta', 'Picolo'];
const [, , p3] = personages;
console.log(p3); // Picolo

const returnArreglo = () => {
  return ['ABC', 123];
};

const [letters, numbers] = returnArreglo();
console.log(letters, numbers);

const useState = (value) => {
  return [
    value,
    () => {
      console.log('Hello World');
    },
  ];
};

const arr = useState('Krilin');
console.log(arr);
arr[1]();

// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. El segundo se llamara setName

const [name, setName] = useState('Krilin');
console.log(name);
setName();
