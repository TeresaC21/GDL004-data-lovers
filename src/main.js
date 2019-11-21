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

  twelveSpecies
} from './data.js';

const idHuman = document.querySelector('#imgHumano');
const idAlien = document.querySelector('#imgAlien');
const idRobot = document.querySelector('#imgRobot');
const idHumanoide = document.querySelector('#imgHumanoide');
const idParasite = document.querySelector('#imgParasito');
/*const idIdunknown = document.querySelector('#img');
const idPoopybuttbole = document.querySelector('#img');
const idMytholog = document.querySelector('#img');
const idAnimal = document.querySelector('#img');
const idVampire = document.querySelector('#img');
const idCronenberg = document.querySelector('#img');
const idDisease = document.querySelector('#img');*/

const showInfoToHumans = (showHumans) => {
  for (let i = 0; i < showHumans.length; i++) {
    const allHumans = document.createElement('div');
    allHumans.className = 'characters';
    allHumans.innerHTML = `<p>${showHumans[i].name}</p> ` + `<img src=${showHumans[i].image}></img>` + `<p>${showHumans[i].species}</p>`
    document.querySelector('#fin').appendChild(allHumans);
  }
}
idHuman.addEventListener('click',
  () => {
    idAlien.classList.add('esconder');
    idRobot.classList.add('esconder');
    idHumanoide.classList.add('esconder');
    idParasite.classList.add('esconder');
    // aqui traemos la data de humanos
    document.querySelector('#resultados').classList.remove('esconder');
    document.querySelector('#resultados').textContent = showInfoToHumans(humans);
  });
  const showInfoToAliens = (showAliens) => {
    for (let i = 0; i < showAliens.length; i++) {
      const allAliens = document.createElement('div');
      allAliens.className = 'characters';
      allAliens.innerHTML = `<p>${showAliens[i].name}</p> ` + `<img src=${showAliens[i].image}></img>` + `<p>${showAliens[i].species}</p>`
      document.querySelector('#fin').appendChild(allAliens);
    }
  }
  idAlien.addEventListener('click',
    () => {
      idHuman.classList.add('esconder');
      idRobot.classList.add('esconder');
      idHumanoide.classList.add('esconder');
      idParasite.classList.add('esconder');
      // aqui traemos la data de humanos
      document.querySelector('#resultados').classList.remove('esconder');
      document.querySelector('#resultados').textContent = showInfoToAliens(aliens);
    });
  
