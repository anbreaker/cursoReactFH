const person = {
  name: 'Tony',
  surname: 'Stark',
  old: 45,
  direction: {
    city: 'New York',
    zip: 3544,
    lat: 40.6643,
    lon: -73.9385,
  },
};

// console.table({person});

const person2 = {...person};
person2.name = 'Peter';

console.log(person);
console.log(person2);
