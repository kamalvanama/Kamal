function ChildComponent29(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>First Color: {props.colors[0]}</p>
      <p>City: {props.student.city}</p>
    </div>
  );
}

export default ChildComponent29;