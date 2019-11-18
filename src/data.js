import dataSet from './data/rickandmorty/rickandmorty.js';

const resultMap = new Map(Object.entries(dataSet.results));
console.log(resultMap);
resultMap.forEach((value, key) => {
  console.log(key + '=' + value.species);
});

