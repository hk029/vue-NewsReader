<template>
  <div id="app">
  
     <router-view></router-view>
  </div>
</template>

<script>
import detail from './components/NewsDetail'
export default {
  name: 'app',
  components:{detail},
  created(){
      
  },
  mounted(){
      
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

.hl{
  border:1px solid #333;
  padding:2px 2px;
  background:#eee;
  border-radius:5px;
}
body {
  background-color: #fbf9fe;
}
</style>
