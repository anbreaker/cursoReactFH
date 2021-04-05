// Destructuring assignment javascript
// Asignación de
const person = {
  name: 'Tony',
  surname: 'Stark',
  age: 45,
  secret: 'Ironman',
};

console.log(person.name);
console.log(person.surname);
console.log(person.secret);

// const {name, surname, secret} = person;
// console.log(name);
// console.log(surname);
// console.log(secret);

const returnPerson = (user) => {
  const { name, surname, secret } = user;
  console.log(name, surname, secret);
};
returnPerson(person);

const returnPerson2 = ({ surname, rango = 'boss' }) => {
  console.log(surname, rango);
};
returnPerson2(person);

const useContext = ({ secret, name, age }) => {
  return {
    keyName: name,
    years: age,
    rango: secret,
    latlng: {
      lat: 14.265,
      lng: -12.155,
    },
  };
};
const {
  keyName,
  years,
  rango,
  latlng: { lat, lng },
} = useContext(person);
console.log(keyName, years, rango);
console.log(lat, lng);

const deadpool = {
  name: 'Wade',
  surname: 'Winston',
  pow: 'Regeneration',
  getName: function () {
    return `\n${this.name} ${this.surname}`;
  },
  // Con esta funcion el this apunta a globas (el window en Node)
  getPow() {
    return `poder: ${this.pow}`;
  },
};

console.log(deadpool.getName(), deadpool.getPow());

const { name, surname, pow } = deadpool;

console.log(name, surname, pow);
