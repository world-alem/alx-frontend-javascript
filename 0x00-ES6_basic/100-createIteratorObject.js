export default function createIteratorObject(report) {
  const array = [];

  Object.values(report.allEmployees).forEach((item) => {
    array.push(...item);
  });

  return array;
}
