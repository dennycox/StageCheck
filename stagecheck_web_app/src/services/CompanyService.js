import Axios from '../axios-common';

const getAll = async () => {
  return await Axios.get("/companies");
};

const get = async id => {
  return await Axios.get(`/companies/${id}`);
};

const create = async data => {
  return await Axios.post("/companies", data);
};

const update = async (id, data) => {
  return await Axios.put(`/companies/${id}`, data);
};

const remove = async id => {
  return await Axios.delete(`/companies/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  headers: {
    "Content-type": "application/json"
  }
};