import React from "react";
import Products from "./components/products/Products.js";
import useFetch from "./hooks/useFetch.js";


const App = () => {
  
  const {data,isLoading,error}=useFetch("https://fakestoreapi.com/products")

  
  return (
    <div>
      <h1>Products App</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading....</p>}
      {data.length && <Products products={data} />}
    </div>
  );
};

export default App;
