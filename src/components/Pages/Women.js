import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import HashLoader from "react-spinners/HashLoader";
import Product from "../Products/Product";

const Women = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
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
        <Product products={products} />
      )}
    </div>
  );
};

export default Women;
