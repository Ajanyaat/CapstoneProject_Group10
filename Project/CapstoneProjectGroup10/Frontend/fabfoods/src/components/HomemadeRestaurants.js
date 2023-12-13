import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomemadeRestaurants = () => {
  const initialRestaurants = [
    {
      id: 1,
      name: "Restaurant 1",
      cuisine: "Cuisine Type 1",
      rating: 4.5,
      image: "restaurant2.jpg"
    },
    {
      id: 2,
      name: "Restaurant 2",
      cuisine: "Cuisine Type 2",
      rating: 4.2,
      image: "restaurant2.jpg"
    },
    // ... Add more restaurants as needed
  ];

  const [restaurants] = useState(initialRestaurants);

  return (
    <section className="featured-restaurants">
      <h2>Homemade Food</h2>
      <div className="row">
        {restaurants.map((restaurant) => (
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

export default HomemadeRestaurants;
