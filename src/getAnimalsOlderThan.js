const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const verifyName = species.find((specie) => specie.name === animal);
  return verifyName.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
