import React, { useState, useEffect } from 'react';

function SearchOrders() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating fetching data from an API
    // Replace this with actual API calls
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/search-orders');
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
      <h2>Search Orders</h2>
      <input
        type="text"
        placeholder="Search by order name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {orders
          .filter(order => order.orderName.includes(searchTerm))
          .map(order => (
            <li key={order.id}>{order.orderName} from {order.userName}</li>
          ))}
      </ul>
    </div>
  );
}

export default SearchOrders;
