const data = require('../data/zoo_data');

const { species, employees } = data;

const completeInfo = employees.map((emp) => {
  const infoChart = {
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: emp.responsibleFor.map((x) => species.find((animal) => animal.id === x).name),
    locations: emp.responsibleFor.map((x) => species.find((animal) => animal.id === x).location),
  };
  return infoChart;
});

// const completeInfo seguindo o modelo solicitado no readme, de id, nome completo, espécies e suas localizações

function getEmployeesCoverage(employee) {
  const info = completeInfo;
  if (!employee) return info;
  const result = info.find((e) =>
    e.fullName.includes(Object.values(employee)) || e.id.includes(Object.values(employee)));
  if (!result) throw new Error('Informações inválidas');
  return result;
}

module.exports = getEmployeesCoverage;

// consultado sobre includes em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
