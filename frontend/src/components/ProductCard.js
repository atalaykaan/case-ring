import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import "./ProductCard.css";

function ProductCard({ product }) {
  const [color, setColor] = useState("yellow");
  const popularity = (product.popularityScore * 5).toFixed(1);

  const colorNames = {
    yellow: "Yellow Gold",
    white: "White Gold",
    rose: "Rose Gold"
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img
          src={product.images?.[color]}
          alt={`${product.name} - ${color}`}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-price">${product.price} USD</div>
        <div className="color-picker">
          {["yellow", "white", "rose"].map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`color-swatch ${color === c ? "selected" : ""}`}
              style={{
                backgroundColor:
                  c === "yellow"
                    ? "#E6CA97"
                    : c === "white"
                    ? "#D9D9D9"
                    : "#E1AAA9"
              }}
            />
          ))}
        </div>
        <div className="color-label">{colorNames[color]}</div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => {
              if (i + 1 <= Math.floor(popularity)) {
                // Full star
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={solidStar}
                    style={{ color: "#e7bf7e", marginRight: "2px" }} // Blue
                  />
                );
              } else if (i < popularity && i + 1 > popularity) {
                // Half star
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={halfStar}
                    style={{ color: "#e7bf7e", marginRight: "2px" }} // Blue
                  />
                );
              } else {
                // Empty star
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={regularStar}
                    style={{ color: "#ddd", marginRight: "2px" }} // Light gray
                  />
                );
              }
            })}
            <span className="rating-score">{popularity}/5</span>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
