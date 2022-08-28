import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal.jsx';
import { useStateValue } from '../contexts/StateProvider';
import CheckoutProduct from './CheckoutProduct.jsx';

const Checkout = () => {
   const [{ basket, user }, dispatch] = useStateValue();

   return (
      <div className="Checkout">
         <div className="Checkout_left">
            <img
               src="https://timesofindia.indiatimes.com/photo/86699690.cms"
               alt="Checkout"
            />
            <div>
               <h2 className="Checkout_title">Your Shopping Basket</h2>
               {basket.map((item) => (
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                  />
               ))}
            </div>
         </div>
         <div className="Checkout_right">
            <Subtotal />
         </div>
      </div>
   );
};

export default Checkout;
