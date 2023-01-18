export default function appendToEachArrayValue(array, appendString) {
  const copy = [];

  for (const value of array) {
    copy.push(appendString + value);
  }

  return copy;
}
