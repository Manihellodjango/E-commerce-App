import React from "react";
import propTypes from "prop-types";

const Product = ({product}) => {
  const { image,title,price,rating,category } = product;
  return (
    <article className="product">
      <div className="product__upper">
        <img src={image} alt={title}></img>
      </div>

      <div className="product__lower">
        <h4>{title}</h4>
        <p>price :{price}</p>
        <p>Rating :{rating.rate}/5</p>
        <p>Category: {category}</p>
      </div>
      <button> Buy</button>
      <button>Add to cart</button>
    </article>
  );
};

Product.propTypes = {
  products: propTypes.object,
};

export default Product;
