import http from "../http-common";

const getAll = () => {
  return http.get("/internships");
};

const get = id => {
  return http.get(`/internships/${id}`);
};

const create = data => {
  return http.post("/internships", data);
};

const update = (id, data) => {
  return http.put(`/internships/${id}`, data);
};

const remove = id => {
  return http.delete(`/internships/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};