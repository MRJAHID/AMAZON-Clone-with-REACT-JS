import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotals } from '../contexts/reducer';

const Subtotal = () => {
   const navigate = useNavigate();
   // eslint-disable-next-line no-unused-vars
   const [{ basket }, dispatch] = useStateValue();

   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     Subtotal ({basket.length}): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                     <input type="checkbox" /> This order contains a gift
                  </small>
               </>
            )}
            decimalScale={2}
            value={getBasketTotals(basket)}
            displayType="text"
            thousandSeparator
            prefix="$"
         />
         <button
            type="button"
            onClick={(e) => navigate('/payment', { replace: true })}>
            Proceed to Checkout
         </button>
      </div>
   );
};

export default Subtotal;
