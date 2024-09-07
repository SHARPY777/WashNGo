import axios from 'axios';

const baseUrl = "https://tor.appdevelopers.mobi/api/login";

export const LoginApi = async (Data) => {
  try {
    const response = await axios.post(baseUrl, Data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Response of User Login:", response.data);

    // Check the message in the response and handle errors accordingly
    if (response.data.message === "Invalid phone") {
      throw new Error('Authentication Failed: Phone number is incorrect');
    } else if (response.data.message === "Invalid Password") {
      throw new Error('Authentication Failed: Password is incorrect');
    } 

    return response.data; 

  } catch (error) {
    console.error(error.message);
    throw new Error(error.message || "Error in login. Please try again123.");
  }
};
