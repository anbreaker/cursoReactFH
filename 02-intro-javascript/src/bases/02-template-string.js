// Templates Strings

const name = 'anbreaker';
const surname = 'anbreaker';

const fullName = `${name} ${surname}`;
console.log(fullName);

function getHello(name) {
  return 'Hello ' + name;
}

console.log(`This text -> ${getHello(name)}`);
