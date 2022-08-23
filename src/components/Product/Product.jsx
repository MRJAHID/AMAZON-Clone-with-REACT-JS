import React from 'react';
import './Product.css';

const Product = () => {
   return (
      <div className="Product">
         <div className="Product-description">
            <span className="Product-title">The lean startup</span>
            <span className="Product-price">$500</span>
            <span className="Product-rating">
               <p>🌟</p>
               <p>🌟</p>
               <p>🌟</p>
               <p>🌟</p>
               <p>🌟</p>
            </span>
         </div>
         <img src="" alt="book" />
         <button type="button">Add to Cart</button>
      </div>
   );
};

export default Product;
