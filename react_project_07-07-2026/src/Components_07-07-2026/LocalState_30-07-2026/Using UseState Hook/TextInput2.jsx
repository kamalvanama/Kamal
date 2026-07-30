
function TextInput2() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="kamalakar"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello, {name}</h3>
    </div>
  );
}

export default TextInput2;