const data = require('../data/zoo_data');

const { species, employees } = data;

// const { employees } = data;

const getOldestAnimal = (specie) =>
  (specie.residents.sort((yare, ora) => ora.age - yare.age))[0];

// function getOldestAnimal (specie) {
// specie.residents.sort((yare, ora) => ora.age - yare.ora[0]};

function getOldestFromFirstSpecies(id) {
  const idOwner = employees.find((employee) => employee.id === id);
  const care = species.find((specie) => specie.id === idOwner.responsibleFor[0]);
  return [getOldestAnimal(care).name, getOldestAnimal(care).sex, getOldestAnimal(care).age];
}

module.exports = getOldestFromFirstSpecies;

// idOwner é o funcionário, responsibleFor retorna os animais que ele cuida e o 0 é o index do primeiro animal
// Array esperado pelo teste: nome, sexo e por último idade
