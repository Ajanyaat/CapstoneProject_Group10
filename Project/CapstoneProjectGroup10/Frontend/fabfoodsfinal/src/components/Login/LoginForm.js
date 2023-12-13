import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigation function from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        user_name: username,
        password: password,
      };

      const response = await fetch('https://localhost:44324/api/Loginpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.text();

      if (response.ok) {
        console.log('JWT Token:', responseData);
        console.log('Login successful');
        
        // Extract the restaurant ID from responseData or wherever it is available
        const restaurantId = 1; // For example, replace with the actual restaurant ID
        
        // Navigate to the specific restaurant's menu page
        navigate(`/`); // Redirect to the menu page
      } else {
        const errorData = await response.json();
        console.log('Login failed');
        // Handle error cases
      }
    } catch (error) {
      console.log('Login failed');
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div className='back'>
      <div className='full-page-content'>
        <div className='login-form-container'>
          <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
        <Link to='/signup' className='register-link'>
          New user? Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
