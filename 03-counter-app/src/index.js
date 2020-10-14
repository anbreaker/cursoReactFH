import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp.js';
import './index.css';

const rootDiv = document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo='Hola, soy Goku' />, rootDiv);
// ReactDOM.render(<PrimeraApp saludo='hola mundo' />, rootDiv);
// ReactDOM.render(<CounterApp value={10} />, rootDiv);
