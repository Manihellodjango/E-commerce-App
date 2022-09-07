import React from "react";
import propTypes from "prop-types";
import Product from "./Product";

const Products = (props) => {
  const { products } = props;

  /* mapping the products */
  const productsElement = products.map((product) => <Product key={product.id} product={product} />);

  return (
    <section className="products">{productsElement}</section>
  );
};

Products.propTypes = {
  products: propTypes.array,
};

export default Products;
