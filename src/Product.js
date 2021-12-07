import { useState } from "react";

export default function Product(props) {
  const initialCount = 0;

  const color = props.soldout ? "red" : "green";
  console.log(props);

  const [count, setCount] = useState(initialCount);
  function plusClick() {
    setCount((prevCount) => prevCount + 1);
    props.addToBasket({
      price: props.price,
      productdisplayname: props.productdisplayname,
      id: props.id,
    });
  }
  function minusClick() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <article
      style={{
        backgroundColor: color,
      }}
    >
      <h2>{props.productdisplayname}</h2>
      <p>Item ID {props.id}</p>
      <p>${props.price}</p>
      <div className="counter">
        <button onClick={minusClick}>-</button>
        <div>{count}</div>
        <button onClick={plusClick}>+</button>
      </div>
    </article>
  );
}
