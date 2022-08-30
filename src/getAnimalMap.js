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
  const animalGrid = {
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
  return animalGrid;
};

console.log(orderedNames());

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalLocation;
  if (options.sorted === true) return orderedNames();
  if (options.includeNames === true) return animals();
}

console.log(getAnimalMap({ sorted: true }));

module.exports = getAnimalMap;
