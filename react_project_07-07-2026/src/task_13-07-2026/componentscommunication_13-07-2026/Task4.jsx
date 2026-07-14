import ChildA from "../../Components_07-07-2026/sibling components/ChildA";
import ChildB from "../../Components_07-07-2026/sibling components/ChildB";
function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Sibling Component Communication</h2>

      <ChildA setMessage={setMessage} />
      <ChildB message={message} />
    </div>
  );
}

export default App;