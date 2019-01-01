import axios from 'axios';

const config = {
  baseURL: `https://neattask-428ee.firebaseio.com/`
};

const instance = axios.create(config);

export default instance;
