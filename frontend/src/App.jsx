import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Product from './components/Product';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import CheckOutdetails from './pages/CheckOutdetails';
import OrderComplete from './pages/OrderComplete';
import Myorder from './pages/Myorder';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Navbar if the user is NOT on the Login or Signup pages */}
      {location.pathname !== '/Login' && location.pathname !== '/Signup' && <Navbar />}
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Myorder" element={<Myorder />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOutdetails />} />
          <Route path="/Ordercomplete" element={<OrderComplete />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
