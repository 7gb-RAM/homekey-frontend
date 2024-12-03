import axios from 'axios';

// Create an axios instance with default configurations
const api = axios.create({
  baseURL: process.env.BASE_URL, // Set your base URL here
  timeout: 10000, // Optional: set a timeout for requests (10 seconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any global headers here (e.g., Authorization token)
  },
});

// Function for making GET requests
const get = async ({url, config = {}}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function for making POST requests
const post = async ({url, data, config = {}}) => {
  try {
    const response = await api.post(url, data, config);
    console.log(response)
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function for making PUT requests
const put = async ({url, data, config = {}}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function for making DELETE requests
const deleteRequest = async ({url, config = {}}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Error handling function
const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error('Error response:', error.response);
    throw new Error(error.response.data?.message || 'An error occurred');
  } else if (error.request) {
    // No response from server
    console.error('Error request:', error.request);
    throw new Error('No response from the server');
  } else {
    // Something went wrong setting up the request
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
};

// You can export your wrapper functions like this
export default {
  get,
  post,
  put,
  delete: deleteRequest,  // Renaming to `delete` to avoid keyword conflict
};
