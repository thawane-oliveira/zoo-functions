const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

// function get(){};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || scheduleTarget !== { species } || scheduleTarget !== { hours }) {
    return {};
  }
}

module.exports = getSchedule;
