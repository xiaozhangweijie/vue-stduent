<template>
  <div class="about">
  <input type="text" placeholder="用户" v-model="user">
<input type="password"  v-model="pwd" placeholder="密码">
<input type="text" placeholder="电话号" v-model="phone">
<button @click="login">注册</button>
{{arr}}
  </div>
</template>
<script>
import {mapActions,mapState} from "vuex";
export default {
  data(){
    return {
      user:"",
      pwd:"",
      phone:""
    }
  },
  computed:{
  ...mapState({
    arr:state=>state.Login.arr
  })
  },
    methods:{
      ...mapActions({
        regist:"Login/regist"
      }),
      login(){
        if(this.user.length&&this.pwd.length>=6&&/^1(3|4|5|7|8)\d{9}$/.test(this.phone) ||
        /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.phone)
){
        let user=this.user;
        let pwd=this.pwd;
        this.regist({username:user,password:pwd,phone:this.phone});
        alert("成功");
        this.user="";
        this.pwd="";
        this.phone="";
        }else{
          alert("用户名或密码错误");
        }
      if(this.arr){
       this.$router.push("/home/login");
      }else{
        alert("用户名已存在");
      }
      }
    
    },
    created(){
    }
}
</script>

