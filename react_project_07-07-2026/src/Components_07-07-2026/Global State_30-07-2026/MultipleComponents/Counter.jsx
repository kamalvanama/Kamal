function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Display count={count} />
    </div>
  );
}

export default Counter;