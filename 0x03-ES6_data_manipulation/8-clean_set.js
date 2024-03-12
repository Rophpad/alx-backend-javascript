export default function cleanSet(set, startString) {
  const returnSet = [];
  set.forEach((str) => {
    if (str.slice(0, 3) === startString) {
      returnSet.push(str.slice(3));
    }
  });
  return returnSet.join('-');
}
