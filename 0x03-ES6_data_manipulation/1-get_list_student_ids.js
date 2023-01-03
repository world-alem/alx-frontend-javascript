export default function getListStudentIds(array) {
  return array instanceof Array ? array.map((item) => item.id) : [];
}
