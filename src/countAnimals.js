const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return species
      .find((type) => (type.name === animal.specie)).residents
      .filter((gender) => gender.sex === animal.sex).length;
  }
  return species.find((bichineo) => bichineo.name === animal.specie).residents.length;
}

module.exports = countAnimals;

// const acc = {};
// animals.forEach((specie) => {
//   acc[specie.name] = specie.residents.length;
// });
