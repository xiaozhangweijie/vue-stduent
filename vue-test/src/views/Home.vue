<template>
  <div class="home">
    <nav>
      重点学生日周考成绩录入管理系统
    </nav>
    <span>网站工程</span>
    <div class="ins">
      <div>
       <router-link to="/login">登录</router-link> |
       <router-link to="/regedit">注册</router-link>
      </div>
<input type="text" placeholder="牛牛號/">
<input type="text" placeholder="输入密码">
<button>登入</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  created(){
    console.log(document.body.clientWidth,document.body.clientTop);
  }
}
</script>
<style lang="scss">
@media screen and (min-width:375px){
.home{
  width:100%;
  height:100%;
  display:flex;
  flex-direction: column;
    nav{
      width:100%;
      height:40px;
      line-height:40px;
      background:rgb(63, 81, 181) 100%;
      text-align: center;
      color:#fff;
      font-size:14px;
    }
    span{
      width:100%;
      height:44px;
      line-height:44px;
      display:inline-block;
      text-align:center;
    }
    .ins{
 width:100%;
 display:flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 >div{
   width:100%;
   height:30px;
   line-height:30px;
   text-align: center;
 }

 input{
   width:90%;
   height:30px;
   margin-top:5px;
 }
 button{
   width:90%;
   height:30px;
   background:#3F51B5 100%;
   margin-top:5px;
   border:none;
   border-radius:5px;
   color:#fff;
 }
    }
}
}
@media screen and (min-width:1121px){
.home{
  width:100%;
  height:100%;
    nav{
      width:100%;
      height:40px;
      line-height:40px;
      background:rgb(63, 81, 181) 100%;
      text-align: center;
      color:#fff;
      font-size:14px;
    }
     span{
      width:100%;
      height:44px;
      line-height:44px;
      display:inline-block;
      text-align:center;
    }
    .ins{
 width:100%;
 display:flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
>div{
  width:100%;
  height:30px;
  line-height:30px;
   text-align: center;
 }
 input{
   width:90%;
   height:30px;
   margin-top:5px;
 }
 button{
   width:90%;
   height:30px;
   background:#3F51B5 100%;
   margin-top:5px;
   border:none;
   border-radius:5px;
   color:#fff;
 }
    }
}
}


</style>

