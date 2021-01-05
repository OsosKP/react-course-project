import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-koburger-default-rtdb.firebaseio.com/'
})

export default instance;