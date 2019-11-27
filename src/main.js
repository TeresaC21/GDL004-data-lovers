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

const idBotton = document.querySelector('#btnOrder');
const idContainer = document.querySelector('#contenedor');
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

const showInfo = (showTypes) => {
  for (let i = 0; i < showTypes.length; i++) {
    const allTypes = document.createElement('div');
    allTypes.className = 'characters';
    allTypes.innerHTML = `<img src=${showTypes[i].image}></img>` + `<p>Name:  ${showTypes[i].name}</p>` + `<p>Specie: ${showTypes[i].species}</p>` + `<p>Status: ${showTypes[i].status}</p>` + `<p>Gender: ${showTypes[i].gender}</p>`;
    document.querySelector('#resultados').appendChild(allTypes);
  }
}
// traer contenedor de especies y ocultar primer pantalla de inicio
document.querySelector('#btnInicio').addEventListener('click', () => {
  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#contenedor').classList.remove('esconder');
});

idHuman.addEventListener('click', () => {
  idContainer.classList.add('esconder');
  // aqui traemos la data de humanos
  document.querySelector('#resultados').classList.remove('esconder');
  document.querySelector('#btnOrder').textContent = showInfo(humans);
});

idAlien.addEventListener('click', () => {
  idContainer.classList.add('esconder');
  // aqui traemos la data de Aliens
  document.querySelector('#resultados').classList.remove('esconder');
  document.querySelector('#btnOrder').textContent = showInfo(aliens);
});

/*idBotton.addEventListener('click',() => {
    document.querySelector('#inicio').classList.add('esconder');
    document.querySelector('#container').classList.remove('esconder');
    document.querySelector('#resultados').textContent = showInfo(orderSort.humans);
  });*/

idBotton.addEventListener('click', () => {
  //document.querySelector(‘#inicio’).classList.add(‘esconder’);
  //document.querySelector(‘.prueba’).innerHTML = ‘’;
  //document.querySelector(‘.esconder’).innerHTML = ‘’;
  const humansSortedByName = sortAnythingByName(humans);
  console.log(humansSortedByName)
  //
  document.querySelector('#resultados').innerHTML = '';
  //document.querySelector(‘#resultados’).classList.remove(‘esconder’);
  document.querySelector('.esconder').textContent = showInfo(humansSortedByName);
});

document.querySelector('#btnFin').addEventListener('click', () => {
  document.querySelector('#contenedor').classList.add('esconder');
  document.querySelector('#resultados').classList.add('esconder');
  // aqui traemos la data de Aliens
  document.querySelector('#inicio').classList.remove('esconder');
});

/*
let modalBtn = document.getElementById ("modal-btn") 
let modal = document.querySelector (".modal") 
let closeBtn = document.querySelector (".close-btn") 
modalBtn.addEventListener('click', (e) => { 
  modal.style.display = "block" 
}) 
closeBtn.addEventListener('click', (e) => { 
  modal.style.display = "none" 
})
window.addEventListener('click', (e) => {
  if (e.target == modal) { 
    modal.style.display = "none" 
  }
})*/
/*document.querySelector("#btnOrder").addEventListener("click", () => {
        let showSort = (orderSort);
        document.getElementById("resultados").innerHTML = ""
      })

    /*idHuman.addEventListener('click', () => {
        // aqui traemos la data de humanos
        document.querySelector('#resultados').classList.remove('esconder');
        document.querySelector('#btnOrder').textContent = showInfo(twelveSpecies);
      });
    /* idBotton.addEventListener('click',() => {
      idHuman.classList.add('esconder');
      document.querySelector('#mostrarEpisodios').classList.remove('esconder');
      document.querySelector('#resultados').textContent = showInfo(episodes);
      console.logshowInfoToEpis(episodes)
    });
    */

/*const showInfoToAliens = (showAliens) => {
aliens.map((personaje)=>{
let span = document.createElement("span");
const template = `<div class="name">${personaje.name}</div>
<img src=${personaje.image}></img>`
span.innerHTML = template;
document.getElementById("fin").appendChild(span);
})*/
