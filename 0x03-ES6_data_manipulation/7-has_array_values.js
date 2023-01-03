export default function hasValuesFromARray(set, array) {
  return array.every((item) => set.has(item));
}
