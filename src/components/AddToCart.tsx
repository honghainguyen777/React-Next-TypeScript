import React from "react";
import { useStateDispatch, CartItem } from "./AppState";

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export function withAddToCart<OriginalProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: OriginalProps) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick: AddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return <ChildComponent {...props} addToCart={handleAddToCartClick} />;
  };

  return AddToCartHOC;
}
