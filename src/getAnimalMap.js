const data = require('../data/zoo_data');

const { species } = data;

const animalLocation = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const animals = () => {
  const animalGrid = {
    NE: species.filter((specie) => specie.location === 'NE')
      .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
    NW: species.filter((specie) => specie.location === 'NW')
      .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
    SE: species.filter((specie) => specie.location === 'SE')
      .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
    SW: species.filter((specie) => specie.location === 'SW')
      .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
  };
  return animalGrid;
};

const orderedNames = () => {
  const animalName = {
    NE: species.filter((specie) => specie.location === 'NE')
      .map((animal) => ({ [animal.name]: animal.residents
        .map((resident) => resident.name).sort() })),
    NW: species.filter((specie) => specie.location === 'NW')
      .map((animal) => ({ [animal.name]: animal.residents
        .map((resident) => resident.name).sort() })),
    SE: species.filter((specie) => specie.location === 'SE')
      .map((animal) => ({ [animal.name]: animal.residents
        .map((resident) => resident.name).sort() })),
    SW: species.filter((specie) => specie.location === 'SW')
      .map((animal) => ({ [animal.name]: animal.residents
        .map((resident) => resident.name).sort() })),
  };
  return animalName;
};

const animalGender = (param) => {
  const animalSex = {
    NE: species.filter((specie) => specie.location === 'NE').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name) })),
    NW: species.filter((specie) => specie.location === 'NW').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name) })),
    SE: species.filter((specie) => specie.location === 'SE').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name) })),
    SW: species.filter((specie) => specie.location === 'SW').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name) })),
  };
  return animalSex;
};

const sortedGender = (param) => {
  const sortedSex = {
    NE: species.filter((specie) => specie.location === 'NE').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name).sort() })),
    NW: species.filter((specie) => specie.location === 'NW').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name).sort() })),
    SE: species.filter((specie) => specie.location === 'SE').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name).sort() })),
    SW: species.filter((specie) => specie.location === 'SW').map((animal) => (
      { [animal.name]: animal.residents.filter((resident) => resident.sex === param)
        .map((resident) => resident.name).sort() })),
  };
  return sortedSex;
};

function helper(options) {
  const fOrM = options.sex === 'male' || options.sex === 'female';
  if (fOrM) {
    if (options.sorted) return sortedGender(options.sex);
    return animalGender(options.sex);
  }
  return null;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalLocation;
  const help = helper(options);
  if (help !== null) return help;
  if (options.sorted) return orderedNames();
  return animals();
}

module.exports = getAnimalMap;
