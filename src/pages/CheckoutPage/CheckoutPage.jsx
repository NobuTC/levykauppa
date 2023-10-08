import React, { useState } from "react";

function CheckoutPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    // You can implement the checkout logic here, e.g., submit an order
    // For this example, we'll just display a message
    alert(`Thank you, ${name}! Your order has been placed.`);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Address:</label>
        <textarea value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="applePay">Apple Pay</option>
        </select>
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CheckoutPage;
