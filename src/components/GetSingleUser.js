import React, { useState } from 'react';
import axios from 'axios';
import apiRoutes from '../apiRoutes'; // Import the API routes


function GetSingleUser() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  const fetchSingleUser = async () => {
    try {
      const response = await axios.get(apiRoutes.getSingleUser(userId));
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching single user", error);
    }
  };

  return (
    <div>
      <h2>Get Single User</h2>
      <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
      <button onClick={fetchSingleUser}>Get User</button>

      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.address.street}, {user.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default GetSingleUser;
