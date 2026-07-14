import Task1 from "./Task1";

function Parent() {
  const name = "Kamal";
  const course = "React";

  return (
    <div>
      <h1>Parent Component</h1>

      <Task1 name={name} course={course} />
    </div>
  );
}

export default Parent;