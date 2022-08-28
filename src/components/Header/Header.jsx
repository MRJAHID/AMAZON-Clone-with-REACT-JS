import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ShoppingBasket, Search } from '@mui/icons-material';

const Header = () => {
   return (
      <div className="Header">
         {/* Logo */}
         <Link to="/">
            <div className="Header-logo">
               <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="Logo"
               />
            </div>
         </Link>
         {/* Address */}
         <div className="Header-optionAddress">
            {/* icon */}
            <div className="Header-option">
               <span className="Header-optionLineOne">Hello,</span>
               <span className="Header-optionLineTwo">Select your address</span>
            </div>
         </div>
         {/* Search */}
         <div className="Header-search">
            <input className="Header-searchInput" type="text" />
            <div className="Header-searchIconContainer">
               <Search />
            </div>
         </div>
         <div className="Header-navItems">
            {/* Login name */}
            <div className="Header-option">
               <span className="Header-optionLineOne">Hello, Nazariy</span>
               <span className="Header-optionLineTwo">Account & Lsits</span>
            </div>
            {/* Orders */}
            <div className="Header-option">
               <span className="Header-optionLineOne">Returns</span>
               <span className="Header-optionLineTwo">& Orders</span>
            </div>
            {/* Cart */}
            <Link to="/cart">
               <div className="Header-optionCart">
                  <ShoppingBasket />
                  <span className="Header-cartCount">getCount</span>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Header;
