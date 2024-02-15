import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const data = useSelector((state) => state.items.cart);
  return (
    <>
      {data.map((item, index) => {
        <div key={index}>
          <h1>{item.title}</h1>
        </div>
      })}
    </>
  );
};

export default Cart;
