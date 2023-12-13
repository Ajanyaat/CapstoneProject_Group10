import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div >
        <h1>Welcome to the Restaurant App</h1>
        <p>Explore our delicious menu and place your orders!</p>
        <div className="button-container">
          <Link to="/assigned-orders" className="button">
            <div className="button-content">Assigned Orders</div>
          </Link>
          <Link to="/search-orders" className="button">
            <div className="button-content">Search Orders</div>
          </Link>
          <Link to="/update-orders" className="button">
            <div className="button-content">Update Orders</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
