const data = require('../data/zoo_data');

const ticketPrice = data.prices;

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
  {
    const allVisitors = countEntrants(entrants);
    let totalTicket = 0;
    totalTicket += allVisitors.child * ticketPrice.child;
    totalTicket += allVisitors.adult * ticketPrice.adult;
    totalTicket += allVisitors.senior * ticketPrice.senior;
    return totalTicket;
  }
}

module.exports = { calculateEntry, countEntrants };
