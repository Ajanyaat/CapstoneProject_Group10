import React from 'react';
import { ListGroup } from 'react-bootstrap';

const OrderList = ({ orders }) => {
  return (
    <div className="mt-4">
      <h3>Search Results:</h3>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order.id}>
            Order ID: {order.orderId} - Status: {order.status}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OrderList;
