function Item2() {
  let today = new Date();
  let indianTime = today.toLocaleString();
  return <p>This is the current time : {indianTime}</p>;
}

export default Item2;
