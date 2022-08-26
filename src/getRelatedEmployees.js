const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
