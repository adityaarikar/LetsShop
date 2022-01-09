import React, { useState, useEffect } from "react";
import Product from "../Products/Product";
import HashLoader from "react-spinners/HashLoader";
import classes from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.loader}>
          <HashLoader color="#000" loading={loading} size={150} />
        </div>
      ) : (
        <Product products={products} title={"Our Products"} />
      )}
    </div>
  );
};

export default Home;
