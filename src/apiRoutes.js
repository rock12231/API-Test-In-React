const API_BASE_URL = "https://dummyapi.online/api";

const apiRoutes = {
  getAllUsers: `${API_BASE_URL}/users`,
  getSingleUser: (id) => `${API_BASE_URL}/users/${id}`, // Accepts a user id
  createUser: `${API_BASE_URL}/users`,
  updateUser: (id) => `${API_BASE_URL}/users/${id}`, // Accepts a user id
};

export default apiRoutes;
