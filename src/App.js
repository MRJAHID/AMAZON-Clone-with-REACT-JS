import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './components/contexts/StateProvider';

const App = () => {
   // eslint-disable-next-line no-empty-pattern
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      // Will only run once when the app component is loaded...

      auth.onAuthStateChanged((authUser) => {
         console.log('USER IS =>> ', authUser);
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

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </div>
   );
};

export default App;
