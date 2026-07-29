import ChildComponent from "../ParentToChild Communication_29-07-2026/Data Rceived in Child Component/ChildComponent";

function ChildComponent({ sendData }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => sendData("Hello Parent!")}>
        Send Data
      </button>
    </div>
  );
}

export default ChildComponent;