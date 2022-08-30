const data = require('../data/zoo_data');

const { species } = data;

const noParam = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const animals = () => {
  const animalGrid = {
    NE: species.filter((specie) => specie.location === 'NE').map((animal) => animal.name),
    NW: species.filter((specie) => specie.location === 'NW').map((animal) => animal.name),
    SE: species.filter((specie) => specie.location === 'SE').map((animal) => animal.name),
    SW: species.filter((specie) => specie.location === 'SW').map((animal) => animal.name),
  };
  return animalGrid;
};

const animalSex = () => {

};

function getAnimalMap(options) {
  if (!options || options !== { includeNames: true }) return noParam;
}

module.exports = getAnimalMap;
