import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="product-carousel-container">
      <button className="arrow left" onClick={scrollLeft}>
        ‹
      </button>
      <div className="product-carousel" ref={containerRef}>
        {products.map((product, index) => (
          <div className="product-card-wrapper" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
}

export default ProductList;
