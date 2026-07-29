

function Parent() {
  return (
    <div>
      <Child product="Laptop" price={50000} />
      <Child product="Mobile" price={20000} />
      <Child product="Headphones" price={3000} />
    </div>
  );
}

export default Parent;