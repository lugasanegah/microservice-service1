const axios = require('axios');

// Fungsi untuk membuat permintaan ke Service 2
const callService2 = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/service');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fungsi untuk membuat permintaan ke Service 3
const callService3 = async () => {
  try {
    const response = await axios.get('http://localhost:3002/api/service');
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { callService2, callService3 };
