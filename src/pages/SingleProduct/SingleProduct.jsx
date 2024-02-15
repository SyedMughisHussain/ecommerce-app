import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CircularLoader from "../../components/Loader";
import DetailCard from "../../components/DetailCard";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response.data);
      setProducts(response.data);
      // console.log(response.data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      {loading ? (
        <CircularLoader />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "5px",
          }}
        >
          {
            <div
              style={{
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <DetailCard
                title={products.title}
                image={products.image}
                description={products.description}
                price={products.price}
                id={products.id}
              />
            </div>
          }
        </div>
      )}
    </>
  );
};

export default SingleProduct;
