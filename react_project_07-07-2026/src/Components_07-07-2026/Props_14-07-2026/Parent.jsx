

function Parent() {
  const name = "Kamal";
  const course = "React JS";

  return (
    <div>
      <h1>Parent Component</h1>

      <Child name={name} course={course} />
    </div>
  );
}

export default Parent;