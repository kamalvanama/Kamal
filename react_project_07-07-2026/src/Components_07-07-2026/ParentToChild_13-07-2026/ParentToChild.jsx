function ParentTOChild() {
  const name = "Kamal"; 
  const age = 25; // Number
  const skills = ["HTML", "CSS", "React", "JavaScript"]; // Array
  const student = {
    id: 101,
    city: "Vijayawada",
    course: "B.Sc Computers"
  }; // Object

  return (
    <div>
      <h1>Parent Component</h1>

      <Child
        name={name}
        age={age}
        skills={skills}
        student={student}
      />
    </div>
  );
}

export default ParentTOChild;