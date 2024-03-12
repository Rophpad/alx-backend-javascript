export default function getListStudentIds(objArray) {
  let ids = [];
  if (objArray instanceof Array) {
    ids = objArray.map((obj) => obj.id);
    return ids;
  }
  return ids;
}
