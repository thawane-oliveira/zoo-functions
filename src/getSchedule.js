const data = require('../data/zoo_data');

const { hours, species } = data;
const days = Object.keys(hours);

// const { hours } = data;

function horaryInfo(param) {
  const completeSchedule = {};
  days.forEach((day) => {
    completeSchedule[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species.filter(({ availability }) => availability
        .includes(day)).map(({ name }) => name),
    };
    if (day === 'Monday') {
      completeSchedule[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });

  const foundDay = days.some((day) => day === param);
  if (!param || !foundDay) return completeSchedule;

  if (foundDay) return { [param]: completeSchedule[param] };
}

function getSchedule(scheduleTarget) {
  const foundDay = days.some((day) => day === scheduleTarget);

  if (species.some((zooAn) => zooAn.name === scheduleTarget)) {
    return species.find((zooAn) => zooAn.name === scheduleTarget).availability;
  }

  if (!scheduleTarget || !foundDay) return horaryInfo();
  if (foundDay) return horaryInfo(scheduleTarget);
}

module.exports = getSchedule;
