import React from 'react';
import { Link} from 'react-router-dom';
//import LoginForm from './Login/LoginForm';
import AddFoodForm from './Menuaddform/FoodForm';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to FAB foods!</h1>
      <p>Your go-to destination for delicious online food orders.</p>
      <Link to="/menu">
      <button className='btn-order'>Order now</button>
      </Link>
      <br/>
      <br/>
      <Link to="/addfood">
          <button>Add Menu</button>
      </Link>
     
    </section>
    
  );
}

export default HeroSection;
