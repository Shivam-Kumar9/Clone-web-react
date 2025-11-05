import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import './css/cart.css';

export default function Cart() {
  const {
    cartItems,
    totalQuantity,
    totalPrice,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
  } = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateCartItemQuantity(id, newQuantity);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the entire cart?')) {
      clearCart();
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-empty">
          <h2>Your cart is empty 🛒</h2>
          <p>Start shopping to add items to your cart!</p>
          <button className="btn-shop-now" onClick={() => window.location.href = '/products'}>
            Continue Shopping
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-title">Your Cart ({totalQuantity} items) 🛍️</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.thumbnail || item.images?.[0]}
                alt={item.title}
                className="cart-item-img"
                onError={(e) => { e.target.src = '/placeholder-image.jpg'; }} // Fallback image
              />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                {item.discountPercentage > 0 && (
                  <p className="cart-item-discount">
                    Discount: {item.discountPercentage}% off
                  </p>
                )}
                <div className="cart-item-quantity">
                  <label htmlFor={`qty-${item.id}`}>Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      ➖
                    </button>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      aria-label={`Quantity for ${item.title}`}
                    />
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      ➕
                    </button>
                  </div>
                </div>
                <div className="cart-item-controls">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
              <div className="cart-item-total">
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-details">
            <p>Total Items: {totalQuantity}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className="btn-clear" onClick={handleClearCart}>
            Clear Cart
          </button>
          <button className="btn-checkout" onClick={() => window.location.href = '/checkout'}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
