const data = require('../data/zoo_data');

const animals = data.species;

function countAnimals(...animal) {
  if (!animal.length) {
    return animals.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
}

console.log(countAnimals());

module.exports = countAnimals;
