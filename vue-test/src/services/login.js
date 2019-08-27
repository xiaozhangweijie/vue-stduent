import request from "../until/request.js";
export function login(params){
    return request({
        url:"/emstu/teacher/login",
        methods:"POST",
        data:params
    })
}