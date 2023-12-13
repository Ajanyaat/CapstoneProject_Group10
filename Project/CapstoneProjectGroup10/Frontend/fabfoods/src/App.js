
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import HomemadeRestaurants from './components/HomemadeRestaurants';
import Footer from './components/Footer';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import RestaurantMenu from './components/RestaurantMenu';
import OrderSummary from './components/YourOrdersPage';
import ConfirmPayment from './components/ConfirmPayment';

function App() {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/restaurants/:id"
            element={<RestaurantMenu orderItems={orderItems} setOrderItems={setOrderItems} />}
          />
          <Route path="/your-orders" element={<OrderSummary orderItems={orderItems} />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const [showFeatured, setShowFeatured] = useState(true);

  const handleShowFeatured = () => {
    setShowFeatured(true);
  };

  const handleShowHomemade = () => {
    setShowFeatured(false);
  };

  return (
    <>
      <HeroSection />
      <div className="container-fluid">
        <div className="row">
          <main className="container">
            <div className="restaurant-sections">
              <button onClick={handleShowFeatured}>Show Featured Restaurants</button>
              <button onClick={handleShowHomemade}>Show Homemade Restaurants</button>
            </div>
            <Routes>
              <Route path="/" element={showFeatured ? <FeaturedRestaurants /> : <HomemadeRestaurants />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
