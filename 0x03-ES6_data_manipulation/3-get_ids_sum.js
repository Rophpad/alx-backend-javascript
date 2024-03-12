export default function getStudentIdSum(students) {
  const initialValue = 0;
  return students.reduce((id, student) => id + student.id, +initialValue);
}
