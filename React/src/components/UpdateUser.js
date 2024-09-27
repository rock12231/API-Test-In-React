import React, { useState } from 'react';
import axios from 'axios';
import apiRoutes from '../apiRoutes'; // Import the API routes

function UpdateUser() {
  const [userId, setUserId] = useState(1);
  const [userInput, setUserInput] = useState({
    name: '',
    username: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const updateUser = async () => {
    const updatedUser = {
      name: userInput.name,
      username: userInput.username,
      email: userInput.email,
      address: {
        street: userInput.street,
        city: userInput.city,
        state: userInput.state,
        zipcode: userInput.zipcode,
      },
    };

    try {
      await axios.put(apiRoutes.updateUser(userId), updatedUser);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
      <input type="text" name="name" value={userInput.name} onChange={handleInputChange} placeholder="Name" />
      <input type="text" name="username" value={userInput.username} onChange={handleInputChange} placeholder="Username" />
      <input type="email" name="email" value={userInput.email} onChange={handleInputChange} placeholder="Email" />
      <input type="text" name="street" value={userInput.street} onChange={handleInputChange} placeholder="Street" />
      <input type="text" name="city" value={userInput.city} onChange={handleInputChange} placeholder="City" />
      <input type="text" name="state" value={userInput.state} onChange={handleInputChange} placeholder="State" />
      <input type="text" name="zipcode" value={userInput.zipcode} onChange={handleInputChange} placeholder="Zipcode" />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default UpdateUser;
