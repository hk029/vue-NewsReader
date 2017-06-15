<template>
  <div id="app">
  
    <detail></detail>
  </div>
</template>

<script>
import detail from './components/NewsDetail'
export default {
  name: 'app',
  components:{detail},
  created(){
      console.log('parent created');
  },
  mounted(){
      console.log('parent mounted');
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

.hl{
  border:1px solid #333;
  padding:1px 2px;
  background:#eee;
  border-radius:5px;
}
body {
  background-color: #fbf9fe;
}
</style>
