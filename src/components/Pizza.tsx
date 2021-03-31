import React from "react";
import { useAddToCart } from "./AddToCart";
import PizzaCSS from "./Pizza.module.css";
import { Pizza } from "./types";
// import { withAddToCart, AddToCartProps } from "./AddToCart";

// interface Props extends AddToCartProps {
interface Props {
  pizza: Pizza;
}

// const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
const PizzaItem: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
};

// export default withAddToCart(PizzaItem);
export default PizzaItem;
