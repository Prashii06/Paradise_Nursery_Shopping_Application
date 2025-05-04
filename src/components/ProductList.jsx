import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    name: 'Spider Plant',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    description: 'Easy to care for and great at purifying the air.',
    cost: '$12',
  },
  {
    category: 'Air Purifying Plants',
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    description: 'Beautiful flowers and excellent air purifier.',
    cost: '$18',
  },
  {
    category: 'Air Purifying Plants',
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    description: 'Hardy plant that thrives in low light.',
    cost: '$10',
  },
  {
    category: 'Stress Reducer And Mood Booster Plants',
    name: 'Aloe Vera',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    description: 'Easy to care for and has many banefits.',
    cost: '$12',
  },
  {
    category: 'Stress Reducer And Mood Booster Plants',
    name: 'English Ivy',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    description: 'Beautiful and simple.',
    cost: '$18',
  },
  {
    category: 'Stress Reducer And Mood Booster Plants',
    name: 'Lavender',
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    description: 'Very beautiful flowers.',
    cost: '$25',
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>{plant.cost}</p>
          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;