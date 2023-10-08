import React, { useState } from "react";

function CartPage() {
  // Replace this with actual cart data or state management
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 29.99, quantity: 1 },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    // You can implement the logic to remove the item from the cart
    // For this example, we'll filter the items to remove the specified item
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );

  // Function to calculate the total price of items in the cart
  function calculateTotal() {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }
}

export default CartPage;
