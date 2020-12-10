import Axios from '../axios-common';

const getAll = async () => {
  return await Axios.get("/studies");
};

export default {
  getAll,
  headers: {
    "Content-type": "application/json"
  }
};