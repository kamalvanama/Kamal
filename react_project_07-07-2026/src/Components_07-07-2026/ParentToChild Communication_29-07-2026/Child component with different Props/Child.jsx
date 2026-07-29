function Child(props) {
  return (
    <div>
      <h3>Product Details</h3>
      <p>Product: {props.product}</p>
      <p>Price: ₹{props.price}</p>
      <hr />
    </div>
  );
}

export default Child;