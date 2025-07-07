import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";
import "./fonts.css"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://case-ring-backend.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
