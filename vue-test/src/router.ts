import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/login',
      name: 'home',
      component: Home,
      children:[
        {
          path:"/home/login",
          name:"login",
          component:()=>import("./views/Login.vue")
        },{
          path:"/home/regedit",
          name:"regedit",
          component:()=>import("./views/Regedit.vue")
        }
      ]
    },{
      path:"/attention",
      name:"attention",
      component:()=>import("./views/Attention.vue")
    }
  ]
})
