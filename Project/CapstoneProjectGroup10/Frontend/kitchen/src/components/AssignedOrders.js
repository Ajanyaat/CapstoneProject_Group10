import React, { useState, useEffect } from 'react';

function AssignedOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    // Replace this with actual API calls
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/assigned-orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Assigned Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.orderName} from {order.userName}</li>
        ))}
      </ul>
    </div>
  );
}

export default AssignedOrders;
