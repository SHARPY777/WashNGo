import axios from 'axios';
const baseUrl = "https://tor.appdevelopers.mobi/api/register"

export const RegisterApi = async (Data) => {
  try {
    const response = await axios.post(`${baseUrl}`, Data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.warn(response.status);
    console.log("Response of User Registration:", response.data);
    return response.data; 

  } catch (error) {
    console.log(error.status)
    throw new Error('Error Signing Up :' + error.message);
  }
};
