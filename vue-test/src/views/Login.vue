<template>
  <div class="about">
    <input type="text" placeholder="牛牛號/" v-model="user">
<input type="password" placeholder="输入密码" v-model="phone">
<button @click="login">登录</button>
  </div>
</template>
<script>
import {mapActions,mapState} from "vuex";

export default {
  data(){
   return{
user:"",
phone:""
   }
 },computed:{
     ...mapState({
       list:state=>state.Login.list
     })
   },methods:{
   ...mapActions({
     addData:"Login/addData"
   }),
   login(){
     if(this.user!==""&&this.phone>=6){
  this.addData({username:this.user,password:this.phone})
  console.log(this.list,2);
  if(this.list||this.list===1){
    alert("成功");
  }else{
    alert("用户名或密码错误");
  }
     }else{
       alert("用户名或密码错误");
     }

   },created(){
     console.log(this.list);
   }
 }
}
</script>

