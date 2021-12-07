export default function Basket(props) {
  return <MyBasket basket={props.basket} />;
}

function MyBasket(props) {
  const initialValue = 0;
  let sum = props.basket.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, initialValue);
  return (
    <aside>
      <div>
        <h2>Your Basket</h2>
        <p>{props.basket.length} items</p>
        <p>${sum}</p>
      </div>
      <h3>Checkout</h3>
      <form></form>
    </aside>
  );
}
