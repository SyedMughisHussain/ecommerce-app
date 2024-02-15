import React from "react";

const DetailCard = (props) => {
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
