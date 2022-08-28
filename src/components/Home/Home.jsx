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
                     <Product />
                     <Product />
                  </div>
                  <div className="Home-row">
                     <Product
                        title="High-Back Gaming Chair PC Office Chair Computer Racing Chair"
                        image="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SX679_.jpg"
                        price="$500"
                     />
                     <Product
                        title="High-Back Gaming Chair PC Office Chair Computer Racing Chair"
                        image="https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SX679_.jpg"
                        price="$500"
                     />
                     <Product />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
