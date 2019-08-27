import { login} from "../../services/index";
const state = {
    list:[]
  };
  
  const mutations = {
    pushAdd(state, payload) {
      state.list = payload;
    }
  };
  const actions = {
    //添加试题
    async addData({ commit }, payload) {
      let data = await login(payload);
      console.log("res",data);
      commit("pushAdd", data);
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };