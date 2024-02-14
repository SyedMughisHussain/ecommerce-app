import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
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
          }}
        >
          Products
        </h2>
        <Badge badgeContent={5} color="secondary">
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
