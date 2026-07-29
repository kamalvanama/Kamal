import Child from "./ChildComponent29";

function ParentComponent29() {
  return (
    <div>
      <Child
        name="Kamal"
        age={21}
        colors={["Red", "Blue"]}
        student={{ city: "Hyderabad" }}
      />
    </div>
  );
}

export default ParentComponent29;