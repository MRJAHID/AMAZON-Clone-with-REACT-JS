import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
         </Routes>
      </div>
   );
};

export default App;
