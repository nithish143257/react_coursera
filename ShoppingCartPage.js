import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartPage.css'; // يمكنك إضافة CSS هنا

function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState([]); // من الأفضل مشاركة هذه الحالة مع الصفحة الأخرى باستخدام Context أو Redux

  const removeItem = (product) => {
    setCartItems(cartItems.filter(item => item !== product));
  };

  const incrementItem = (product) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.indexOf(product);
    newCartItems.splice(index, 0, product);
    setCartItems(newCartItems);
  };

  const decrementItem = (product) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.indexOf(product);
    if (index > -1) {
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
    }
  };

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopping-cart-page">
      <header>
        <Link to="/"><h1>Paradise Nursery</h1></Link>
        <p>Your Cart</p>
        <Link to="/products">
          <div className="cart-icon">
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </header>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <div className="quantity-control">
              <button onClick={() => decrementItem(item)}>-</button>
              <span>{cartItems.filter(cartItem => cartItem === item).length}</span>
              <button onClick={() => incrementItem(item)}>+</button>
            </div>
            <button onClick={() => removeItem(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {cartItems.length}</p>
        <p>Total Cost: ${getTotalCost()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
