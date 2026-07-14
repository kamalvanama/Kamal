
function App() {
  const name = "Kamal";
  const course = "React";

  return (
    <div>
      <h1>Parent Component</h1>

      <Child name={name} course={course} />
    </div>
  );
}

export default Parent;