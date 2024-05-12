import './Card.css'
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <button className="product-button">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;