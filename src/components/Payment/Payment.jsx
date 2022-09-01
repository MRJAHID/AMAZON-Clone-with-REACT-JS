import React, { useEffect, useState } from 'react';
import './Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Header from '../Header/Header.jsx';
import CheckoutProduct from '../Checkout/CheckoutProduct.jsx';
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotals } from '../contexts/reducer';

const Payment = () => {
   const [{ basket, user }, dispatch] = useStateValue();
   const navigate = useNavigate();
   const stripe = useStripe();
   const elements = useElements();

   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState('');
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [clientSecret, setClientSecret] = useState(true);

   useEffect(() => {
      // generate the special stripe secret which allows us to charge a customer
      const getClientSecret = async () => {
         const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotals(basket) * 100}`,
         });
         setClientSecret(response.data.clientSecret);
      };

      getClientSecret();
   }, [basket]);

   const handleSubmit = async (event) => {
      event.preventDefault();
      // Do all the fancy stripe work here
      setProcessing(true);
      const payload = await stripe
         .confirmCardPayment(clientSecret, {
            payment_method: {
               card: elements.getElement(CardElement),
            },
         })
         .then(({ paymentIntent }) => {
            // PaymentIntent = Payment Confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate('/orders', { replace: true });
         });
   };

   const handleChange = (event) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : '');
   };

   return (
      <>
         <Header />
         <div className="payment">
            <div className="payment__container">
               Checkout (<Link to="/checkout">{basket?.length} items</Link>)
               {/* Payment section - delivery address */}
               <div className="payment__section">
                  <div className="payment__title">
                     <h3>Delivery Address</h3>
                  </div>
                  <div className="payment__address">
                     <p>{user?.email}</p>
                     <p>123 React Lane</p>
                     <p>Los Angeles, CA</p>
                  </div>
               </div>
               {/* Payment section - Review Items */}
               <div className="payment__section">
                  <div className="payment__title">
                     <h3>Review items and delivery</h3>
                  </div>
                  <div className="payment__items">
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
               {/* Payment section - Payment method */}
               <div className="payment__section">
                  <div className="payment__title">
                     <h3>Payment Method</h3>
                  </div>
                  <div className="payment__details">
                     {/* Stripe magic will go */}

                     <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__priceContainer">
                           <CurrencyFormat
                              renderText={(value) => (
                                 <h3>Order Total: {value}</h3>
                              )}
                              decimalScale={2}
                              value={getBasketTotals(basket)}
                              displayType="text"
                              thousandSeparator
                              prefix="$"
                           />

                           <button
                              type="submit"
                              disabled={processing || disabled || succeeded}>
                              <span>
                                 {processing ? <p>Processing</p> : 'Buy Now'}
                              </span>
                           </button>
                        </div>

                        {/* Errors */}
                        {error && <div> {error} </div>}
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Payment;
