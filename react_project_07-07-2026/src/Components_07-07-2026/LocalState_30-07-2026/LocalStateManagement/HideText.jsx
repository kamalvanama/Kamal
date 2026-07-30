function HideText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Welcome to React!</p>}
    </div>
  );
}

export default HideText;