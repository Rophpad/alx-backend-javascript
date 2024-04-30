const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    let lines = data.split('\n');
    lines.pop();
    lines.shift();
    const NUMBER_OF_STUDENTS = lines.length;
    console.log(NUMBER_OF_STUDENTS);

    lines = lines.map((line) => line.split(','));

    let FIELD = 'CS';
    const CSstudents = lines.filter((line) => line[3] === 'CS');
    const studInCS = CSstudents.reduce((list, line) => list.concat(line[0]), []).reduce((a, b) => a + ', ' + b);

    console.log(`Number of students in ${FIELD} : ${CSstudents.length}. List: ${studInCS}`);

    FIELD = 'SWE';
    const SWEstudents = lines.filter((line) => line[3] === 'SWE');
    const studInSWE = SWEstudents.reduce((list, line) => list.concat(line[0]), []).reduce((a, b) => a + ', ' + b);

    console.log(`Number of students in ${FIELD} : ${SWEstudents.length}. List: ${studInSWE}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
