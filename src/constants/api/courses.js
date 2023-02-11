import axios from "configs/axios";
const constants = {
  all: (options = { params: { status: "published" } }) =>
    axios.get(`/courses`, options).then((res) => res.data),
  details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
};

export default constants;
