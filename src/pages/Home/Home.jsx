import React, { useEffect, useState } from "react";
import ShoppingCard from "../../components/ShoppingCard";
import axios from "axios";
import CircularLoader from "../../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const fetchData = response.data.map((product) => {
        return {
          ...product,
        };
      });
      setProducts(fetchData);
      console.log(response.data);
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
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "5px"
        }}>
          {products.map((product, index) => {
            return (
              <div style={{
                marginLeft: "20px",
                marginBottom: "20px"
              }} key={index}>
                <ShoppingCard
                  title={product.title}
                  image={product.image}
                  description={product.description}
                  id={product.id}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
