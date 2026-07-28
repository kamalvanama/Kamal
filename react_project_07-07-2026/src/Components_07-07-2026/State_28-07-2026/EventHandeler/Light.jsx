function Light() {
  const [status, setStatus] = useState("OFF");

  const turnOn = () => {
    setStatus("ON");
  };

  return (
    <div>
      <h2>Light is {status}</h2>
      <button onClick={turnOn}>Turn ON</button>
    </div>
  );
}

export default Light;