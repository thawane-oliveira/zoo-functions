const data = require('../data/zoo_data');

const animals = data.species;

function countAnimals(animal) {
  if (!animal) {
    return animals.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return animals
      .find((type) => (type.name === animal.specie)).residents
      .filter((gender) => gender.sex === animal.sex).length;
  }
  return animals.find((bichineo) => bichineo.name === animal.specie).residents.length;
}

module.exports = countAnimals;

// const acc = {};
// animals.forEach((specie) => {
//   acc[specie.name] = specie.residents.length;
// });
