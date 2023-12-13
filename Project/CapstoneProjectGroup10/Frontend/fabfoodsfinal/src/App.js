import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Login from './components/Login/LoginForm';
import Signup from './components/Signup/SignupForm';
import RestaurantMenu from './components/RestaurantMenu';
import AddFoodForm from './components/Menuaddform/FoodForm';

function App() {
  const [orderItems, setOrderItems] = useState([]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/restaurants/:id"
              element={<RestaurantMenu orderItems={orderItems} setOrderItems={setOrderItems} />}
            />
            <Route path="/menu" element={<RestaurantMenu />} />
            <Route path="/addfood" element={<AddFoodForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      
      <Footer className="footer" />
    </>
  );
}

export default App;
