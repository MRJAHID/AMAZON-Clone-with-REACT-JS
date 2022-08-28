import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal.jsx';

const Checkout = () => {
   return (
      <div className="Checkout">
         <div className="Checkout_left">
            <img
               src="https://timesofindia.indiatimes.com/photo/86699690.cms"
               alt="Checkout"
            />
            <div>
               <h2 className="Checkout_title">Your Shopping Basket</h2>
            </div>
         </div>
         <div className="Checkout_right">
            <Subtotal />
         </div>
      </div>
   );
};

export default Checkout;
