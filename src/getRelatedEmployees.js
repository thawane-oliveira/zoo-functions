const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.forEach((manager) =>
    manager.some((employee) => employee.manager === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
