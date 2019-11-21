import dataSet from './data/rickandmorty/rickandmorty.js';
import {
  humans,
  aliens,
  humanoids,
  unknowns,
  poopybuttholes,
  mythologs,
  animals,
  vampires,
  robots,
  cronenbergs,
  diseases,
  parasites,
} from './data.js';

const showInfoToHumans = (humans) => {
  for (let i = 0; i < humans.length; i++) {
    const allHumans = document.createElement('div');
    allHumans.className = 'characters';
    allHumans.innerHTML = `<p>${humans[i].name}</p> ` + `<img src=${humans[i].image}></img>`
    document.querySelector('#fin').appendChild(allHumans);
  }
}
document.querySelector('#imgHumano').addEventListener('click',
  () => {
    document.querySelector('#imgAlien').classList.add('esconder');
    document.querySelector('#imgRobot').classList.add('esconder');
    document.querySelector('#imgHumanoide').classList.add('esconder');
    document.querySelector('#imgParasito').classList.add('esconder');
    // aqui traeriamos la data.js
    document.querySelector('#resultadosHum').classList.remove('esconder');
    document.querySelector('#resultadosHum').textContent = showInfoToHumans (dataSet.results);
  });
