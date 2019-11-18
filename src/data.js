/* Manejo de data */

// esta es una función de ejemplo

/*export const example = () => {
  return 'example';
};
*/
import  dataSet  from './data/rickandmorty/rickandmorty.js';

const person = dataSet.results.filter((humano) => {
   return humano.species === 'Human';
 });
 const nombres =dataSet.results.map((nombre) => {
   return nombre.name;
 });

export default nombres;


  //export const example = (species) => {
    /*species: "alien", 
    {
    species: "human",
    },
    humans = characters.filter(character =>character.species= "human");*/
    //return 'example'; }
    
 
