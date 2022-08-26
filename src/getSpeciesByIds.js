const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((identifier) => data.species.find((specie) => identifier === specie.id));
}

module.exports = getSpeciesByIds;
