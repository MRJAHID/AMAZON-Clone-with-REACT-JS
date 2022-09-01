import React from 'react';
import './Home.css';
import Product from '../Product/Product.jsx';
import Header from '../Header/Header.jsx';

const Home = () => {
   return (
      <>
         <Header />
         <div className="Home">
            <div className="Home-container">
               <div
                  className="Home-banner"
                  style={{
                     backgroundImage:
                        'url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)',
                  }}
               />
               <div className="Home-content">
                  <div className="Home-row">
                     <Product
                        id="12321341"
                        title="Dhruvi Trendz Women Soft Cotton Silk Banarasi Saree for women"
                        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/619cbp-6mAL._UY741_.jpg"
                        price={226.0}
                        rating={5}
                     />
                     <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Gt63jGRcS._UX679_.jpg"
                        price={996.0}
                        rating={4}
                     />
                  </div>
                  <div className="Home-row">
                     <Product
                        id="4903850"
                        title=" Laptop Stand Patented Riser Ventilated Portable"
                        image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51aYKwgu-GL._SX300_SY300_QL70_FMwebp_.jpg"
                        price={199.99}
                        rating={3}
                     />
                     <Product
                        id="23445930"
                        title="High-Back Gaming Chair PC Office Chair Computer Racing Chair"
                        image="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SX679_.jpg"
                        price={98.99}
                        rating={5}
                     />
                     <Product
                        id="3254354345"
                        price={598.99}
                        rating={4}
                        title="JavaScript from Beginner to Professional: Learn JavaScript quickly"
                        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51oDSNyJLDL.jpg"
                     />
                  </div>
                  <div className="Home-row">
                     <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
