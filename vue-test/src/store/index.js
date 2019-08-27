import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import Login from "./modules/Login";
export default new Vuex.Store({
    modules:{
        Login
    }
})