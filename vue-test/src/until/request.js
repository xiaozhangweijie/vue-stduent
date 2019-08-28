import axios from "axios";
const service=axios.create({
   // baseURL:"/api",
    timeout:5000
})
// service.interceptors.request.use(
//     config => {
//       //if (getCookie()) {
//         config.headers['content-type'] ="application/json";
//     //}
//       return config
//     },
//     error => {
//       return Promise.reject(error)
//     }
//   )
  
//   service.interceptors.response.use(
//     response => response.data,
//     error => {
//       return Promise.reject(error)
//     }
//   )
export default service;