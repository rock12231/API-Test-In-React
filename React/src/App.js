import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import GetSingleUser from './components/GetSingleUser';
import GetAllUsers from './components/GetAllUsers';

function App() {
  return (
    <div className="App">
      <h1>User Management System</h1>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li><Link to="/create-user">Create User</Link></li>
          <li><Link to="/update-user">Update User</Link></li>
          <li><Link to="/get-single-user">Get Single User</Link></li>
          <li><Link to="/get-all-users">Get All Users</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/get-single-user" element={<GetSingleUser />} />
        <Route path="/get-all-users" element={<GetAllUsers />} />
      </Routes>
    </div>
  );
}

export default App;
