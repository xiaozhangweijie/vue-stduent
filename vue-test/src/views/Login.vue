<template>
  <div class="about">
    <input type="text" placeholder="牛牛號/">
<input type="text" placeholder="输入密码">
<button @click="login">登录</button>
  </div>
</template>
<script>
import {mapActions,mapState} from "vuex";

export default {
  data(){
   return{

   }
 },methods:{
   ...mapActions({
     addData:"Login/addData"
   }),
   login(){
    this.addData({username:"zwj",password:"123456"})
   }
 }
}
</script>

