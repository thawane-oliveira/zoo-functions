const data = require('../data/zoo_data');

// const info = data.prices;

function countEntrants(entrants) {
  const arrToObj = {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age >= 50).length,
  };
  return arrToObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
}

module.exports = { calculateEntry, countEntrants };
