import React, { useState, useEffect } from 'react';

function UpdateOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Simulating fetching data from an API
    // Replace this with actual API calls
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/update-orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleOrderSelect = orderId => {
    const selected = orders.find(order => order.id === orderId);
    setSelectedOrder(selected);
  };

  return (
    <div>
      <h2>Update Orders</h2>
      <ul>
        {orders.map(order => (
          <li
            key={order.id}
            onClick={() => handleOrderSelect(order.id)}
            style={{ cursor: 'pointer' }}
          >
            {order.orderName} from {order.userName}
          </li>
        ))}
      </ul>
      {selectedOrder && (
        <div>
          <h3>Selected Order: {selectedOrder.orderName}</h3>
          {/* Add update form or other content here */}
        </div>
      )}
    </div>
  );
}

export default UpdateOrders;
