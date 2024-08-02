import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductListingPage.css'; // يمكنك إضافة CSS هنا

const products = [
  { id: 1, name: 'Aloe Vera', price: 170, description: 'Air purifying plant', category: 'Air Purifying', image: '/src/assets/ggg.jpg' },
  { id: 1, name: 'Rose', price: 16, description: 'Rose', category: 'Air Purifying', image: '/src/assets/ggg.jpg' },
  { id: 1, name: 'Lavender ', price: 199, description: 'Air purifying plant', category: 'Air Purifying', image: '/src/assets/ggg.jpg' },
  { id: 1, name: 'Tulip', price: 147, description: 'Rose', category: 'Air Purifying', image: '/src/assets/ggg.jpg' },
  { id: 1, name: 'Sunflower', price: 189, description: 'Rose', category: 'Air Purifying', image: '/src/assets/ggg.jpg' },
 
];

function ProductListingPage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="product-listing-page">
      <header>
        <Link to="/"><h1>Paradise Nursery</h1></Link>
        <p>Find your perfect plant</p>
        <Link to="/cart">
          <div className="cart-icon">
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>
              {cartItems.includes(product) ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
