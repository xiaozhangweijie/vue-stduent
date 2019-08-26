<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div> -->
  <div class="home">
    这是home
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
@media screen and (max-width:980px){
.home{
  width:100%;
  height:20px;
  background:pink;
}
}

</style>

