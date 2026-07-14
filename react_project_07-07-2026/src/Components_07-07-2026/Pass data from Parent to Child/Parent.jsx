

function Parent() {
  const message = "Hello from Parent";

  return (
    <Child text={message} />
  );
}

export default Parent;