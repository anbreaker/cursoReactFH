// Funciones JS
const salute = function (name) {
  return `Hello ${name}`;
};

const salute2 = (name) => {
  return `Hello ${name}`;
};
const salute3 = (name) => `Hello ${name}`;

console.log(salute('Goku'));
console.log(salute2('Vegeta'));
console.log(salute3('Picolo'));

const getUser = () => ({
  uuid: 'kadhf454',
  username: 'anbreaker',
});
const user = getUser();

console.log(user);

// Tarea
// 1. Arrow function
// 2. implicit Return

function getUserActive(name) {
  return {
    uuid: 'asd123',
    username: name,
  };
}

const activeUser = getUserActive('Jéssica');
console.log(activeUser, '<--Ver');

const arrowGetUserActive = (name) => ({
  uuid: 'asd123',
  username: name,
});

console.log(arrowGetUserActive('Curro'));
