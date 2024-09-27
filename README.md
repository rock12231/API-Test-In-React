- ```base
        npx create-react-app react-api-app
    ```

-    ```base
        cd react-api-app
     ```

-   ```base
        npm install axios
    ```
- Add to App.js  
    ```base
        import React, { useState, useEffect } from 'react';
        import axios from 'axios';

        const API_BASE_URL = 'https://dummyapi.online/api/users';

        function App() {
        const [users, setUsers] = useState([]);
        const [singleUser, setSingleUser] = useState(null);
        const [userInput, setUserInput] = useState({
            name: '',
            username: '',
            email: '',
            street: '',
            city: '',
            state: '',
            zipcode: '',
        });
        const [userId, setUserId] = useState(1);

        // Fetch all users
        const fetchAllUsers = async () => {
            try {
            const response = await axios.get(API_BASE_URL);
            setUsers(response.data);
            } catch (error) {
            console.error("Error fetching all users", error);
            }
        };

        // Fetch single user
        const fetchSingleUser = async () => {
            try {
            const response = await axios.get(`${API_BASE_URL}/${userId}`);
            setSingleUser(response.data);
            } catch (error) {
            console.error("Error fetching single user", error);
            }
        };

        // Create a new user
        const createUser = async () => {
            const newUser = {
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
            const response = await axios.post(API_BASE_URL, newUser);
            alert("User created successfully!");
            fetchAllUsers(); // Refresh the user list after creation
            } catch (error) {
            console.error("Error creating user", error);
            }
        };

        // Update an existing user
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
            const response = await axios.put(`${API_BASE_URL}/${userId}`, updatedUser);
            alert("User updated successfully!");
            fetchAllUsers(); // Refresh the user list after update
            } catch (error) {
            console.error("Error updating user", error);
            }
        };

        // Handle input change
        const handleInputChange = (e) => {
            setUserInput({ ...userInput, [e.target.name]: e.target.value });
        };

        // Fetch users on initial render
        useEffect(() => {
            fetchAllUsers();
        }, []);

        return (
            <div className="App">
            <h1>React API Example</h1>

            {/* Get All Users */}
            <button onClick={fetchAllUsers}>Get All Users</button>
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            {/* Get One User */}
            <div>
                <h2>Get Single User</h2>
                <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID"
                />
                <button onClick={fetchSingleUser}>Get User</button>
                {singleUser && (
                <div>
                    <h3>{singleUser.name}</h3>
                    <p>{singleUser.email}</p>
                    <p>{singleUser.address.street}, {singleUser.address.city}</p>
                </div>
                )}
            </div>

            {/* Create/Update User Form */}
            <div>
                <h2>Create/Update User</h2>
                <input
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleInputChange}
                placeholder="Name"
                />
                <input
                type="text"
                name="username"
                value={userInput.username}
                onChange={handleInputChange}
                placeholder="Username"
                />
                <input
                type="email"
                name="email"
                value={userInput.email}
                onChange={handleInputChange}
                placeholder="Email"
                />
                <input
                type="text"
                name="street"
                value={userInput.street}
                onChange={handleInputChange}
                placeholder="Street"
                />
                <input
                type="text"
                name="city"
                value={userInput.city}
                onChange={handleInputChange}
                placeholder="City"
                />
                <input
                type="text"
                name="state"
                value={userInput.state}
                onChange={handleInputChange}
                placeholder="State"
                />
                <input
                type="text"
                name="zipcode"
                value={userInput.zipcode}
                onChange={handleInputChange}
                placeholder="Zipcode"
                />

                <button onClick={createUser}>Create User</button>
                <button onClick={updateUser}>Update User</button>
            </div>
            </div>
        );
        }

        export default App;

    ```
-   ```base
        npm start
    ```


## API Run

-   Add Firebase Json File
    ```base
        {
        "type": "",
        "project_id": "",
        "private_key_id": "",
        "private_key": "-----BEGIN PRIVATE KEY-----",
        "client_email": "",
        "client_id": "",
        "auth_uri": "",
        "token_uri": "",
        "auth_provider_x509_cert_url": "",
        "client_x509_cert_url": "",
        "universe_domain": ""
        }
    ```

-   ```base
        node index.js
    ```