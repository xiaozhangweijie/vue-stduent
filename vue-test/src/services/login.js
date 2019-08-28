import request from "../until/request.js";
export function login(params){
    console.log(params);
    return request.post("/api/teacher/login",params);
}
export function register(params){
    return request.post("/api/teacher/register",params);
}