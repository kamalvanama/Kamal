import Parent from "../../Components_07-07-2026/props_10-07-2026/Parent";

function Parent() {
  const message = "Hello from Parent";

  return (
    <Child text={message} />
  );
}

export default Parent;