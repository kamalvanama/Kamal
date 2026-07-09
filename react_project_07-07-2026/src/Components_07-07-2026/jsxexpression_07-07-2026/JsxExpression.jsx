//JSX expressions
function JsxExpression() {
  const name = "Kamal";
  const age = 22;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Next year you will be {age + 1} years old.</p>
      <p>{age >= 18 ? "You are an adult." : "You are a minor."}</p>
    </div>
  );
}

export default JsxExpression;