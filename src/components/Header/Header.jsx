import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ShoppingBasket, Search } from '@mui/icons-material';
import { useStateValue } from '../contexts/StateProvider';

const Header = () => {
   const [{ basket }, dispatch] = useStateValue();
   console.log(dispatch);

   // const handleAuthenticaton = () => {
   //    // if (user) {
   //    //    auth.signOut();
   //    // }
   // };

   return (
      <div className="header">
         <Link to="/">
            <img
               className="header__logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt="Logo"
            />
         </Link>

         <div className="header__search">
            <input className="header__searchInput" type="text" />
            <Search className="header__searchIcon" />
         </div>

         <div className="header__nav">
            <Link to="/login">
               <div className="header__option">
                  <span className="header__optionLineOne">Hello Guest</span>
                  <span className="header__optionLineTwo">Sign In</span>
               </div>
            </Link>

            <Link to="/orders">
               <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span>
               </div>
            </Link>

            <div className="header__option">
               <span className="header__optionLineOne">Your</span>
               <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
               <div className="header__optionBasket">
                  <ShoppingBasket />
                  <span className="header__optionLineTwo header__basketCount">
                     {basket?.length}
                  </span>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Header;
