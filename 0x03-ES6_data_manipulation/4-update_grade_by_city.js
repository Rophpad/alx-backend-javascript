export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityResident = students.filter((student) => student.location === city);
  return cityResident.map((student) => {
    const gradedStudents = student;
    gradedStudents.grade = 'N/A';
    for (const elem of newGrades) {
      if (gradedStudents.id === elem.studentId) {
        gradedStudents.grade = elem.grade;
      }
    }
    return gradedStudents;
  });
}
