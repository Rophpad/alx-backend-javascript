export default function getListStudentIds(objArray) {
  let ids = [];
  if (objArray instanceof Array) {
    //for (let obj of objArray) {
      //let keyVal = Object.entires(objArray);
      //obj.map((objArray) => (ids.push(obj[id])));
    //}
    ids = objArray.map((obj) => obj.id);
  } else {
    return ids;
  }
}
