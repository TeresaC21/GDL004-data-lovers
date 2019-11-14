/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import { character1 } from './data.js';
 import  dataSet  from './data/rickandmorty/rickandmorty.js';

console.log(dataSet);
console.log(character1)

document.querySelector('#imgHumano').addEventListener('click',		
function(e){		
e.preventDefault();		
		
document.querySelector('#root').classList.add('esconder');		
document.querySelector('#mostrarDataHum').classList.remove('esconder');		
});
 
/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
