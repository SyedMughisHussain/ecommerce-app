import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Swal from "sweetalert2";

const DetailCard = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.items.cart);
  console.log(selector);
  return (
    <div
      style={{
        display: "flex",
        height: "50%",
        margin: "20px",
      }}
    >
      <div>
        <img src={props.image} alt={props.title} height={250} />
      </div>
      <div
        style={{
          height: "fit-content",
          marginLeft: "20px",
        }}
      >
        <h2>{props.title}</h2>
        <h2>{props.price}$</h2>
        <p>{props.description}</p>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                title: props.title,
                price: props.price,
                description: props.description,
              })
            );
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item Added to Cart Successfully.",
              showConfirmButton: false,
              timer: 1500
            });
          }}
          style={{
            backgroundColor: "blue",
            padding: "15px",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
