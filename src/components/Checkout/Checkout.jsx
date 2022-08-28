import React from 'react';
import './Checkout.css';
import FlipMove from 'react-flip-move';
import Subtotal from '../Subtotal/Subtotal.jsx';
import { useStateValue } from '../contexts/StateProvider';
import CheckoutProduct from './CheckoutProduct.jsx';
import Header from '../Header/Header.jsx';

const Checkout = () => {
   const [{ basket, user }, dispatch] = useStateValue();

   return (
      <>
         <Header />
         <div className="Checkout">
            <div className="Checkout_left">
               <img
                  src="https://timesofindia.indiatimes.com/photo/86699690.cms"
                  alt="Checkout"
               />
               <div>
                  <h3>Hello {user?.email}</h3>
                  <h2 className="Checkout_title">Your Shopping Basket</h2>
                  <FlipMove>
                     {basket.map((item) => (
                        <CheckoutProduct
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                        />
                     ))}
                  </FlipMove>
               </div>
            </div>
            <div className="Checkout_right">
               <Subtotal />
            </div>
         </div>
      </>
   );
};

export default Checkout;
