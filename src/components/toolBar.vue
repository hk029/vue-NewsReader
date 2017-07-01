<template>
  <div class="tool-bar" v-bind:style="{top:top+'px',left:left+'px'}">
    <button v-on:click="deleteWord"><img src="/static/img/delete.png" alt=""></button>  
    <button v-on:click="searchWord"><img src="/static/img/search.png" alt=""></button>  
    <button v-on:click="addWord"><img :src="starIcon" alt=""></button>  
    <button><img src="/static/img/function.png" alt=""></button>  
  </div>
</template>

<script>
export default {
  name: 'toolBar',
  data() {
    return {
      myshow: this.show,
      starIcon:this.star
    };
  },
  watch: {
    star (){
      this.starIcon = this.star;
    }
  },
  methods: {
    deleteWord(){
      this.$emit('deleteWord');
    },
    addWord(){
      this.starIcon = '/static/img/star.svg';
      this.$emit('addWord');
    },
    searchWord(){
      this.$emit('searchWord');
    }
  },
  props: ['top','left','star']
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
