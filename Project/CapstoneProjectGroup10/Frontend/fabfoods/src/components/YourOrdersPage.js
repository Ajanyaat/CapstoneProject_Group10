// YourOrdersPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const YourOrdersPage = () => {
  const location = useLocation();
  const orderItems = location.state?.orderItems || [];

  const totalPrice = orderItems.reduce(
    (total, item) => total + item.product_Price * item.quantity,
    0
  );

  const handleConfirmAndPay = () => {
    // Implement your logic for confirming and paying the order
    // This could involve sending the order data to a server, processing payment, etc.
    console.log('Order confirmed and paid:', orderItems);
    // Redirect to a success page or other relevant page after confirming and paying
    // history.push('/order-success');
  };

  return (
    <div>
      <h2>Your Orders</h2>
      <ul>
        {orderItems.map(item => (
          <li key={item.product_ID}>
            {item.product_Name} - ₹{item.product_Price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: ₹{totalPrice}</p>
      <button onClick={handleConfirmAndPay} className="confirm-pay-button">
        Confirm and Pay
      </button>
    </div>
  );
};

export default YourOrdersPage;
