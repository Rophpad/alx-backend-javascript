export default function createIteratorObject(report) {
  const listOfEmployees = [];
  /* eslint-disable no-unused-vars */
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      listOfEmployees.push(employee);
    }
  }
  /* eslint-enable no-unused-vars */

  return listOfEmployees;
}
