function ChildA({ setMessage }) {
  return (
    <div>
      <h3>Child A</h3>
      <button onClick={() => setMessage("Hello from Child A!")}>
        Send Message
      </button>
    </div>
  );
}

export default ChildA;