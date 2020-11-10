import Axios from '../axios-common';

const getAllSearch = async (search) => {
  return await Axios.get(`/internships?search=${search}`);
};

const getAll = async () => {
  return await Axios.get(`/internships/`);
};

const get = async id => {
  return await Axios.get(`/internships/${id}`);
};

const create = async data => {
  return await Axios.post("/internships", data);
};

const update = async (id, data) => {
  return await Axios.put(`/internships/${id}`, data);
};

const remove = async id => {
  return await Axios.delete(`/internships/${id}`);
};

export default {
  getAllSearch,
  getAll,
  get,
  create,
  update,
  remove,
  headers: {
    "Content-type": "application/json"
  }
};