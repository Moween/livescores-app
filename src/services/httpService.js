import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response
  && error.response.status >= 400
  && error.response.status < 500;

  if(!expectedError) {
    toast.error('An error occured!');
  }
  return Promise.reject(error);
});

const httpService = async (url) => {
  return await fetchData(url);
};

const fetchData = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    if(error.response && error.response.status === 404) {
      console.log('Invalid Input');
    } 
  }
};

export default httpService;