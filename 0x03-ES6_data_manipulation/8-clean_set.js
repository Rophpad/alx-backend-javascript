export default function cleanSet(set, startString) {
  const returnSet = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      returnSet.push(s.slice(startString.length));
    }
  });
  return returnSet.join('-');
}
