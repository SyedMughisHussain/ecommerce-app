import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const selector = useSelector((state) => state.items.cart);
  const navigate = useNavigate();
  return (
    <header
      style={{
        height: "70px",
        backgroundColor: "black",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "25px",
          }}
        >
          Products
        </h2>
        <Badge
          style={{
            cursor: "pointer"
          }}
          onClick={() => {
            navigate("/cart");
          }}
          badgeContent={selector.length}
          showZero
          color="secondary"
        >
          <ShoppingCartIcon
            style={{
              color: "white",
            }}
          />
        </Badge>
      </nav>
    </header>
  );
};

export default Header;
