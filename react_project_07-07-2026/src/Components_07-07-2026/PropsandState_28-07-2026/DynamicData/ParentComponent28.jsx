function ParentComponent28() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Props and State Example</h1>

      {/* Dynamic data using Props */}
      <Student name="Kamal" course="B.Sc Computers" />

      {/* Dynamic data using State */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
export default ParentComponent28;
