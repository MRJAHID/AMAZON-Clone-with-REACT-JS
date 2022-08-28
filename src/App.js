import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Login from './components/Login/Login';

const App = () => {
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
