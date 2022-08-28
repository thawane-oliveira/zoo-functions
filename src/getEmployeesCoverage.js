const data = require('../data/zoo_data');

const { species, employees } = data;

const arrivedercci = employees.map((emp) => {
  const result = {
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: emp.responsibleFor,
    locations: emp.responsibleFor,
  };
  return result;
});

console.log(arrivedercci);

// const seguindo o modelo solicitado no readme

function getEmployeesCoverage(param) {
  if (!param) {
    return [arrivedercci];
  }
}

module.exports = getEmployeesCoverage;
