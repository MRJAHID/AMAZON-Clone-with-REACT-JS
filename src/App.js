import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './components/contexts/StateProvider';
import Payment from './components/Payment/Payment.jsx';

const stripePromise = loadStripe(
   'pk_test_51LbisrDzwPYxe8ytQDAfvA2plZUoeP6Qf1q0w493kTHNbR9JWFbgMiLDTcO6GYvT4ZNfmB4H6WrT1wGPp4hqbJCY00kI58VnKk',
);
const App = () => {
   // eslint-disable-next-line no-empty-pattern
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      // Will only run once when the app component is loaded...

      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            // The user just logged in / the user was logged in
            dispatch({
               type: 'SET_USER',
               user: authUser,
            });
         } else {
            // The user is logged out
            dispatch({
               type: 'SET_USER',
               user: null,
            });
         }
      });
   });

   const options = {
      // passing the client secret obtained from the server
      clientSecret: '{{CLIENT_SECRET}}',
   };

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment">
               <Elements stripe={stripePromise} options={options}>
                  <Payment />
               </Elements>
            </Route>
         </Routes>
      </div>
   );
};

export default App;
