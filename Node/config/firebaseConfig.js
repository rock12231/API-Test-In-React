const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with the service account key
const serviceAccount = require('../firebaseServiceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-api-567d0-default-rtdb.firebaseio.com/"
});

// Get a reference to the Firebase Realtime Database
const db = admin.database();

module.exports = db;
