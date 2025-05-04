import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  return (
    <Router basename="/shoppingreact">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem onContinueShopping={() => window.location.href='/shoppingreact/plants'} />} />
      </Routes>
    </Router>
  );
}

export default App;