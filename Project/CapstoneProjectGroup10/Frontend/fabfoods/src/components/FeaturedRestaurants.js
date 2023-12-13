import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

// Create a component for displaying restaurant menus
const RestaurantMenu = () => {
  const { id } = useParams(); // Extract restaurant ID from the URL
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the microservice API using the restaurant ID
    fetch(`https://localhost:44384/api/Menu?restaurantId=${id}`)
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, [id]);

  return (
    <div>
      <h2>Menu for Restaurant {id}</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Restaurant 1",
      cuisine: "Cuisine Type 1",
      rating: 4.5,
      image: "restaurant1.jpg"
    },
    {
      id: 2,
      name: "Restaurant 2",
      cuisine: "Cuisine Type 2",
      rating: 3.8,
      image: "restaurant2.jpg"
    },{
      id: 1,
      name: "Restaurant 1",
      cuisine: "Cuisine Type 1",
      rating: 4.5,
      image: "restaurant1.jpg"
    },
    {
      id: 2,
      name: "Restaurant 2",
      cuisine: "Cuisine Type 2",
      rating: 3.8,
      image: "restaurant2.jpg"
    },
    // ... Add more restaurant objects here ...
  ];

  return (
    <section className="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="row">
        {restaurants.slice(0, 6).map((restaurant) => (
          <div className="col-md-4" key={restaurant.id}>
            <Link to={`/restaurants/${restaurant.id}`}>
              <div className="restaurant-card">
                <img src={`/images/${restaurant.image}`} alt={restaurant.name} />
                <h3>{restaurant.name}</h3>
                <p>{restaurant.cuisine}</p>
                <p>Rating: {restaurant.rating}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

// Top-level component where you define your routes
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FeaturedRestaurants />} />
      <Route path="/restaurants/:id" element={<RestaurantMenu />} />
      {/* Other routes */}
    </Routes>
  );
};

export default App;
