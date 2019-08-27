import axios from "axios";
const service=axios.create({
    baseURL:"http://148.70.121.59:9001",
    timeout:5000
})
export default service;