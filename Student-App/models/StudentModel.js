let Students = [
  { id: 1, name: "Anil", course: "MERN" },
  { id: 2, name: "Ravi", course: "AI" }
];

// Get all students
const getAllStudents = () => {
  return Students;
};

// Get student by ID
const getStudentById = (id) => {
  return Students.find((student) => student.id === id);
};

// Add student
const addStudent = (studentData) => {
  const newStudent = {
    id: Students.length + 1,
    ...studentData
  };

  Students.push(newStudent);
  return newStudent;
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent
};