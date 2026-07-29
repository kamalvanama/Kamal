function ChildA({ changeColor }) {
  return (
    <button onClick={() => changeColor("Blue")}>
      Change Color
    </button>
  );
}

export default ChildA;