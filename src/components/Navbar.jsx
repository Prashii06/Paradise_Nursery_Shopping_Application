import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/plants">Explore Plants</Link>
      <Link to="/cart">Go To Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;