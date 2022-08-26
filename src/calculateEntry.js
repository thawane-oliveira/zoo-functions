const data = require('../data/zoo_data');

const info = data;

function countEntrants(entrants) {
  const arrToObj = {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age >= 50).length,
  };
  return arrToObj;
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
