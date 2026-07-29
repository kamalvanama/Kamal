function Parent1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child increaseCount={() => setCount(count + 1)} />
    </div>
  );
}

export default Parent1;