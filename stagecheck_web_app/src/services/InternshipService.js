import axios from 'axios';

const api = "https://localhost:44330/api";

const getAll = async (search = '', studyId = '') => {
  return await axios.get(api,`/internships?search=${search}&studyId=${studyId}`);
};

const get = async id => {
  return await axios.get(api,`/internships/${id}`);
};

const create = async data => {
  return await axios.post(api,"/internships", data);
};

const update = async (id, data) => {
  return await axios.put(api,`/internships/${id}`, data);
};

const remove = async id => {
  return await axios.delete(api,`/internships/${id}`);
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