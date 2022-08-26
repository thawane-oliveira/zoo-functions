const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verifyName = data.species.find((specie) => specie.name === animal);
  return verifyName.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
