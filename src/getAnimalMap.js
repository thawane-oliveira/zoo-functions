const data = require('../data/zoo_data');

// const { species } = data;

const location = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

function getAnimalMap(options) {
  if (!options) return location;
}

module.exports = getAnimalMap;
