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
  sortAnythingByName
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

document.querySelector('#btnFin').addEventListener('click', () => {	
    document.querySelector('#contenedor').classList.add('esconder');	
    document.querySelector('#resultados').classList.add('esconder');		
    document.querySelector('#inicio').classList.remove('esconder');
});
// funcion para ejecutar el e.currentTarget
function newFunction(event) {
  const eventId = event.currentTarget.id;
  idContainer.classList.add('esconder');
  // aqui traemos la data de humanos
  document.querySelector('#resultados').classList.remove('esconder');
  event.preventDefault()
  if (eventId === 'imgHumano') {
    document.querySelector('#btnOrder').className = 'humans';
    document.querySelectorAll('#resultados').innerHTML = showInfo(humans);
  } if (eventId === 'imgAlien') {
    document.querySelector('#btnOrder').className = 'aliens';
    document.querySelectorAll('#resultados').innerHTML = showInfo(aliens);
  } if (eventId === 'imgHumanoide') {
    document.querySelector('#btnOrder').className = 'humanoids';
    document.querySelectorAll('.resultados').innerHTML = showInfo(humanoids);
  } if (eventId === 'imgUnknown') {
    document.querySelector('#btnOrder').className = 'unknowns';
    document.querySelectorAll('.resultados').innerHTML = showInfo(unknowns);   
  } if (eventId === 'imgPoopybutthole') {
    document.querySelector('#btnOrder').className = 'poopybuttholes';
    document.querySelectorAll('.resultados').innerHTML = showInfo(poopybuttholes);
  } if (eventId === 'imgMytholog') {
    document.querySelector('#btnOrder').className = 'mythologs';
    document.querySelectorAll('.resultados').innerHTML = showInfo(mythologs);
  } if (eventId === 'imgAnimal') {
    document.querySelector('#btnOrder').className = 'animals';
    document.querySelectorAll('.resultados').innerHTML = showInfo(animals);
  } if (eventId === 'imgVampire') {
    document.querySelector('#btnOrder').className = 'vampires';
    document.querySelectorAll('.resultados').innerHTML = showInfo(vampires);
  } if (eventId === 'imgRobot') {
    document.querySelector('#btnOrder').className = 'robots';
    document.querySelectorAll('.resultados').innerHTML = showInfo(robots);
  } if (eventId === 'imgCronenberg') {
    document.querySelector('#btnOrder').className = 'cronenbergs';
    document.querySelectorAll('.resultados').innerHTML = showInfo(cronenbergs);
  } if (eventId === 'imgDiseas') {
    document.querySelector('#btnOrder').className = 'diseases';
    document.querySelectorAll('.resultados').innerHTML = showInfo(diseases);
  } if (eventId === 'imgParasito') {
    document.querySelector('#btnOrder').className = 'parasites';
    document.querySelectorAll('.resultados').innerHTML = showInfo(parasites);
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
  }
  if (eventClassName === 'aliens') {
    sortedByName = sortAnythingByName(aliens);
  }
  if (eventClassName === 'humanoids') {
    sortedByName = sortAnythingByName(humanoids);
  }
  if (eventClassName === 'unknowns') {
    sortedByName = sortAnythingByName(unknowns);
  }
  if (eventClassName === 'poopybuttholes') {
    sortedByName = sortAnythingByName(poopybuttholes);
  }
  if (eventClassName === 'mythologs') {
    sortedByName = sortAnythingByName(mythologs);
  }
  if (eventClassName === 'animals') {
    sortedByName = sortAnythingByName(animals);
  }
  if (eventClassName === 'vampires') {
    sortedByName = sortAnythingByName(vampires);
  }
  if (eventClassName === 'robots') {
    sortedByName = sortAnythingByName(robots);
  }
  if (eventClassName === 'cronenbergs') {
    sortedByName = sortAnythingByName(cronenbergs);
  }
  if (eventClassName === 'vampires') {
    sortedByName = sortAnythingByName(vampires);
  }
  if (eventClassName === 'diseases') {
    sortedByName = sortAnythingByName(diseases);
  }
  if (eventClassName === 'parasites') {
    sortedByName = sortAnythingByName(parasites);
  }
  document.querySelector('#resultados').innerHTML = '';
  document.querySelectorAll('#resultados').innerHTML = showInfo(sortedByName);
})