<template>
  <div class="tool-bar" v-bind:style="{top:top+'px',left:left+'px'}">
    <button v-on:click="deleteWord"><img src="/static/delete.png" alt=""></button>  
    <button v-on:click="addWord"><img src="/static/search.png" alt=""></button>  
    <button><img src="/static/star.png" alt=""></button>  
    <button><img src="/static/function.png" alt=""></button>  
  </div>
</template>

<script>
export default {
  name: 'toolBar',
  data() {
    return {
      myshow: this.show
    };
  },
  watch: {

  },
  methods: {
    deleteWord(){
      this.$emit('deleteWord');
    },
    addWord(){
      this.$emit('addWord');
    }
  },
  props: ['top','left']
};
</script>

<style scoped>
  .tool-bar{
    position:absolute;
    overflow: hidden;
    top:600px;
    height:30px;
    width:auto;
    background:#eee;
    width:auto;
    padding:2px 6px;
    box-shadow: 0px 1px 1px 0px #cccccc;
    vertical-align: middle;
  }
  .tool-bar button{
    width: 22px;
    height:22px;
    border:none;
    background:transparent;
    margin-left:5px;
  }
  .tool-bar img{
    width: 100%;
    vertical-align: middle;
  }
</style>
