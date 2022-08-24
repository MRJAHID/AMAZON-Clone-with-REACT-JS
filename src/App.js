import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';

const App = () => {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<h1>Checkout</h1>} />
         </Routes>
      </div>
   );
};

export default App;
