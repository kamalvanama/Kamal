function ParentComponent() {
  const receiveData = (message) => {
    alert("Received from Child: " + message);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child sendData={receiveData} />
    </div>
  );
}

export default ParentComponent;