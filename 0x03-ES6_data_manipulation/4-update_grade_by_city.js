export default function updateStudentGradeByCity(array, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (array instanceof Array) {
    return array
      .filter((item) => item.location === city)
      .map((item) => ({
        ...item,
        grade: (newGrades
          .filter((g) => g.studentId === item.id)
          .pop() || defaultGrade).grade,
      }));
  }

  return [];
}
