const data = require('../data/zoo_data');

const { species, employees } = data;

const arrivedercci = employees.map((emp) => {
  const result = {
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: emp.responsibleFor.map((x) => species.find((animal) => animal.id === x).name),
    locations: emp.responsibleFor.map((x) => species.find((animal) => animal.id === x).location),
  };
  return result;
});

// const seguindo o modelo solicitado no readme

function getEmployeesCoverage(param) {
  if (!param || param === undefined) {
    return arrivedercci;
  }
}

module.exports = getEmployeesCoverage;
