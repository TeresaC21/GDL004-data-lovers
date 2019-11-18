

document.querySelector('#imgHumano').addEventListener('click', 
function() {

document.querySelector('#imgAlien').classList.add('esconder');
document.querySelector('#imgRobot').classList.add('esconder');	
document.querySelector('#imgHumanoide').classList.add('esconder');
document.querySelector('#imgParasito').classList.add('esconder');

document.querySelector('#resultadosHum').classList.remove('esconder');
//aqui traeriamos la data.js

export species from './data.js';

