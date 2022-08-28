import React from 'react';
import './Product.css';
import { useStateValue } from '../contexts/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
   const [{ basket, user }, dispatch] = useStateValue();
   const addToBasket = () => {
      // Dispatch the item into the data layer
      dispatch({
         type: 'ADD_TO_BASKET',
         item: {
            id,
            title,
            image,
            price,
            rating,
         },
      });
   };

   return (
      <div className="Product">
         <div className="Product-description">
            <span className="Product-title">{title}</span>
            <span className="Product-price">{price}</span>
            <span className="Product-rating">
               <p>🌟</p>
               <p>🌟</p>
               <p>🌟</p>
               <p>🌟</p>
               <p>🌟</p>
            </span>
         </div>
         <img src={image} alt="book" />
         <button type="button" onClick={addToBasket}>
            Add to Cart
         </button>
      </div>
   );
};

export default Product;
