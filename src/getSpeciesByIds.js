const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return ids.map((identifier) => species.find((specie) => identifier === specie.id));
}

module.exports = getSpeciesByIds;
