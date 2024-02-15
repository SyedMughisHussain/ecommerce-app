import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";

const Cart = () => {
  const data = useSelector((state) => state.items.cart);
  console.log(data);
  return (
    <>
      <h1
        style={{
          padding: "5px",
        }}
      >
        Cart Items
      </h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
          <CartCard
            title={item.title}
            image={item.image}
            price={item.price}
            description={item.description}
            index={index}
          />
          </div>
        );
      })}
    </>
  );
};

export default Cart;
