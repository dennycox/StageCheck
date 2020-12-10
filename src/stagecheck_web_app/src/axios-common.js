import axios from 'axios';

export default axios.create({
  baseURL: "https://localhost:23459/api"
});