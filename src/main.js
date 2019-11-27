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
  sortAnythingByName,
} from './data.js';

const imgCharacters = document.querySelectorAll('.imgCharacters');
const idBotton = document.querySelector('#btnOrder');
const idContainer = document.querySelector('#contenedor');

const showInfo = (showTypes) => {
  for (let i = 0; i < showTypes.length; i++) {
    const allTypes = document.createElement('div');
    allTypes.className = 'characters';
    allTypes.innerHTML = `<img src=${showTypes[i].image}></img>` + `<p>Name: ${showTypes[i].name}</p>` + `<p>Specie: ${showTypes[i].species}</p>` + `<p>Status: ${showTypes[i].status}</p>` + `<p>Gender: ${showTypes[i].gender}</p`;
    document.querySelector('#resultados').appendChild(allTypes);
  }
};
// traer contenedor de especies y ocultar primer pantalla de inicio
document.querySelector('#btnInicio').addEventListener('click', () => {
  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#contenedor').classList.remove('esconder');
});
// funcion para ejecutar el e.currentTarget
function newFunction(event) {
  const eventId = event.currentTarget.id;
  idContainer.classList.add('esconder');
  // aqui traemos la data de humanos
  document.querySelector('#resultados').classList.remove('esconder');
  if (eventId === 'imgHumano') {
    document.querySelector('#btnOrder').className = 'humans';
    document.querySelector('.characters').textContent = showInfo(humans);
  } if (eventId === 'imgAlien') {
    document.querySelector('#btnOrder').className = 'aliens';
    document.querySelector('.characters').textContent = showInfo(aliens);
  }
}

imgCharacters.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    newFunction(event);
  });
});

idBotton.addEventListener('click', (event) => {
  let sortedByName = [];
  const eventClassName = event.currentTarget.className;
  if (eventClassName === 'humans') {
    sortedByName = sortAnythingByName(humans);
  } if (eventClassName === 'aliens') {
    sortedByName = sortAnythingByName(aliens);
  }
  document.querySelector('#resultados').innerHTML = '';
  document.querySelector('resultados').textContent = showInfo(sortedByName);
});
