import dataSet from './data/rickandmorty/rickandmorty.js';
// filtering species
const humans = dataSet.results.filter((human) => human.species === 'Human');
const aliens = dataSet.results.filter((alien) => alien.species === 'Alien');
const humanoids = dataSet.results.filter((humanoid) => humanoid.species === 'Humanoid');
const unknowns = dataSet.results.filter((unkno) => unkno.species === 'unknown');
const poopybuttholes = dataSet.results.filter((poopybutthole) => poopybutthole.species === 'Poopybutthole');
const mythologs = dataSet.results.filter((mytholog) => mytholog.species === 'Mytholog');
const animals = dataSet.results.filter((animal) => animal.species === 'Animal');
const vampires = dataSet.results.filter((vampire) => vampire.species === 'Vampire');
const robots = dataSet.results.filter((robot) => robot.species === 'Robot');
const cronenbergs = dataSet.results.filter((cronenberg) => cronenberg.species === 'Cronenberg');
const diseases = dataSet.results.filter((disease) => disease.species === 'Disease');
const parasites = dataSet.results.filter((parasite) => parasite.species === 'Parasite');

//  adding all of differents species
const allSpecies = dataSet.results.map((specie) => specie.species);
console.log(allSpecies);
const different = (valor, indice, self) => self.indexOf(valor) === indice;
const twelveSpecies = allSpecies.filter(different);
console.log(twelveSpecies, 'twelve species');

export {
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
  twelveSpecies,

};
