import React, { useState } from 'react';
import './FoodForm.css';

const AddFoodForm = ({ onAddFood }) => {
  const [newFoodData, setNewFoodData] = useState({
    Product_Name: '',
    Product_Description: '',
    Product_Category: '',
    Product_Price: 0,
    Product_Image: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewFoodData({
      ...newFoodData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddFood(); // Call handleAddFood when form is submitted
    setNewFoodData({
      Product_Name: '',
      Product_Description: '',
      Product_Category: '',
      Product_Price: 0,
      Product_Image: '',
    });
  };

  const handleAddFood = () => {
    fetch('https://localhost:44384/api/Menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFoodData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New food data added:', data);
      })
      .catch((error) => {
        console.error('Error adding food data:', error);
      });
  };

  const handleCancel = () => {
    setNewFoodData({
      Product_Name: '',
      Product_Description: '',
      Product_Category: '',
      Product_Price: 0,
      Product_Image: '',
    });
  };

  return (
    <div className="add-food-form-container">
      <div className="add-food-form">
        <h2>Add Food</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Product_Name">Name</label>
            <input
              type="text"
              id="Product_Name"
              name="Product_Name"
              value={newFoodData.Product_Name}
              onChange={handleInputChange}
            />
          </div>
           <div>

      <label htmlFor="Product_Description">Description</label>

      <textarea

       id="Product_Description"

       name="Product_Description"

       value={newFoodData.Product_Description}

       onChange={handleInputChange}

      />

     </div>

     <div>

      <label htmlFor="Product_Category">Category</label>

      <input

       type="text"

       id="Product_Category"

       name="Product_Category"

       value={newFoodData.Product_Category}

       onChange={handleInputChange}

      />

     </div>

     <div>

      <label htmlFor="Product_Price">Price</label>

      <input

       type="number"

       id="Product_Price"

       name="Product_Price"

       value={newFoodData.Product_Price}

       onChange={handleInputChange}

      />

     </div>

     <div>

      <label htmlFor="Product_Image">Image URL</label>

      <input

       type="text"

       id="Product_Image"

       name="Product_Image"

       value={newFoodData.Product_Image}

       onChange={handleInputChange}

      />

     </div>

          {/* Other form input fields */}
          <button type="submit">Add Food</button><br/>
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddFoodForm;
