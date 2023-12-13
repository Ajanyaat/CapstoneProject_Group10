// RestaurantMenu.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './RestaurantMenu.css';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:44384/api/Menu?restaurantId=${id}`)
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, [id]);

  const handleAddToOrder = (item) => {
    const existingItemIndex = orderItems.findIndex(orderItem => orderItem.product_ID === item.product_ID);

    if (existingItemIndex !== -1) {
      // If the item already exists in the order, update its quantity
      const updatedOrder = [...orderItems];
      updatedOrder[existingItemIndex].quantity += 1;
      setOrderItems(updatedOrder);
    } else {
      // If the item is not in the order, add it with quantity 1
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }

    console.log(`Added ${item.product_Name} to the order.`);
  };

  const cartItemCount = orderItems.reduce((total, item) => total + item.quantity, 0);
  const totalOrderPrice = orderItems.reduce((total, item) => total + item.product_Price * item.quantity, 0);

  return (
    <div className="menu-page">
      <div className="menu-container">
        {menuItems.map(item => (
          <div className="menu-item" key={item.product_ID}>
            <div className="item-image">
              <img src={item.product_Image} alt={item.product_Name} />
            </div>
            <div className="item-details">
              <h3>{item.product_Name}</h3>
              <p>{item.product_Description}</p>
              <div className="details-row">
                <p>Category: {item.product_Category}</p>
                <p>Price: ₹{item.product_Price}</p>
              </div>
              <div className="details-row">
                <p>Rating: {item.product_Rating}</p>
                <button className="add-to-order-button" onClick={() => handleAddToOrder(item)}>Add to Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItemCount > 0 && (
        <div className="order-summary-horizontal">
          <p>{cartItemCount} Items | Total Price: ₹{totalOrderPrice}</p>
          <Link to={{ pathname: "/your-orders", state: { orderItems } }} className="view-orders-link">
            VIEW CART
          </Link>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
