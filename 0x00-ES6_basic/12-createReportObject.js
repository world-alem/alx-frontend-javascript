export default function createReportObject(employees) {
  return {
    allEmployees: employees,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
