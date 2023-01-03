export default function getStudentIdsSum(array) {
  return array instanceof Array ? array.reduce(
    (a, b) => a.id || a + b.id,
    0,
  ) : 0;
}
