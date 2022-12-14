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
      <div className="product">
         <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
               <small>$</small>
               <strong>{price}</strong>
            </p>
            <div className="product__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>🌟</p>
                  ))}
            </div>
         </div>

         <img src={image} alt="Product" />

         <button type="button" onClick={addToBasket}>
            Add to Basket
         </button>
      </div>
   );
};

export default Product;
