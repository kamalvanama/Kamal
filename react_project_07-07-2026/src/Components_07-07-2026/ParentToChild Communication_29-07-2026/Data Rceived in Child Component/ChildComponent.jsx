function ChildComponent(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>City: {props.city}</h2>
    </div>
  );
}

export default ChildComponent;