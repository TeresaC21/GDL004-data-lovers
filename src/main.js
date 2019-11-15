/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
//import { character1 } from './data.js';
 import  dataSet  from './data/rickandmorty/rickandmorty.js';

console.log(dataSet);
//console.log(character1);

document.querySelector('#imgHumano').addEventListener('click', 
function() {

document.querySelector('#imgAlien').classList.add('esconder');
document.querySelector('#imgRobot').classList.add('esconder');	
document.querySelector('#imgHumanoide').classList.add('esconder');
document.querySelector('#imgParasito').classList.add('esconder');

document.querySelector('#resultadosHum').classList.remove('esconder');
//aqui traeriamos la data.js

//document.querySelector('#resultadosHum').textContent;		
});

/*document.querySelector('#imgHumano').addEventListener('click', cargarJS);		

function cargarJS() {		
    fetch('rickandmorty.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html ='';
            data.forEach(function(human) {
                html += `
                <li>${human.specie} ${human.name}</li> 
                `;

            })

            document.querySelector('resultados').innerHTML = html;
        })
    }*/
				

 
/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
