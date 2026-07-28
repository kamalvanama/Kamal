function ChildComponent(props) {
  const [marks, setMarks] = useState(80);

  return (
    <div>
      <h2>Student Name: {props.name}</h2>
      <h3>Marks: {marks}</h3>

      <button onClick={() => setMarks(marks + 5)}>
        Increase Marks
      </button>
    </div>
  );
}

export default ChildComponent;