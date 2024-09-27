import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiRoutes from '../apiRoutes'; // Import the API routes

function GetAllUsers() {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(apiRoutes.getAllUsers);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching all users", error);
    }
  };

  useEffect(() => {
    // fetchAllUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <button onClick={fetchAllUsers}>Refresh User List</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id} : {user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetAllUsers;
