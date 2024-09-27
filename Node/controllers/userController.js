const db = require('../config/firebaseConfig');


// Home
exports.home =(req, res) => {
    res.status(200).json("API RUNNING !!!");
}

// Get All Users
exports.getAllUsers = (req, res) => {
  db.ref('users').once('value', (snapshot) => {
    const users = snapshot.val();
    res.status(200).json(users || {});
  }, (error) => {
    res.status(500).send(error);
  });
};

// Get Single User
exports.getSingleUser = (req, res) => {
  const { id } = req.params;
  db.ref('users/' + id).once('value', (snapshot) => {
    if (snapshot.exists()) {
      res.status(200).json(snapshot.val());
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }, (error) => {
    res.status(500).send(error);
  });
};

// Create User
exports.createUser = (req, res) => {
  const newUser = req.body;
  const newUserRef = db.ref('users').push(); // Create a new entry
  newUserRef.set(newUser, (error) => {
    if (error) {
      res.status(500).json({ message: 'Error creating user', error });
    } else {
      res.status(201).json({ id: newUserRef.key, ...newUser });
    }
  });
};

// Update User
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  db.ref('users/' + id).update(updatedUser, (error) => {
    if (error) {
      res.status(500).json({ message: 'Error updating user', error });
    } else {
      res.status(200).json({ id, ...updatedUser });
    }
  });
};

// Delete User
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.ref('users/' + id).remove((error) => {
    if (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
};
