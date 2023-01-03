export default function getStudentsByLocation(array, city) {
  return array instanceof Array ? array.filter((item) => item.location === city) : [];
}
