<template>
  <div class="word-book" >
    <div class="mask" @touchstart="hideThis">

    </div>
    <div class="content" @touchstart.stop="nothing" @touchend.stop="nothing" @touchmove.stop="nothing">
      <h1>生词本</h1>
      <div class="word-wrap">
        <ul>
          <li class="word" v-for="(item,key) in words">
            <h2 class="name">{{item.name}}</h2>
            <p class="explaination" v-html="item.explain"></p>
            <span class="del" :value="item.name" @click="deleteWord(item.name)"><img src="/static/img/x.svg" alt=""></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wordBook',
  data() {
    return {
    };
  },
  watch: {

  },
  methods: {
    hideThis(){
      this.$emit('hideBook');
    },
    nothing(){

    },
    deleteWord(name){
      console.log(name);
      this.$emit('deleteWord',name);
    }
  },
  props: ['top','left','words']
};
</script>

<style scoped>
  .word-book{
    position: fixed;
    overflow: hidden;
    width:100%;
    height: 100%;
    top:0px;
    right:0px;
  }
  .mask{
    position: absolute;
    background: rgba(0,0,0,0.8);
    width:100%;
    height: 100%;
    z-index: 10000;
  }
  .content{
    position: absolute;
    right:0px;
    width:80%;
    background: #eee;
    z-index: 10001;
  }
  .word-wrap{
    height: 100vh;
    overflow-y: auto;
  }
  .word-book h1{
    font-size:20px;
    text-align: center;
    height:40px;
    line-height: 40px;
    color:#333;
    border-bottom: 1px solid #ddd;
  }
  .word-book .word{
    padding:5px 10px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .word-book .word .name{
    font-size:16px;
  }
  .word-book .word .del{
    /*float: right;*/
    position: absolute;
    top:5px;
    right:10px;
    height: 25px;
    line-height: 25px;
    width: 25px;
  }
  .word-book .word .del img{
    height: 15px;
    width: 15px;
  }
  .word-book .word .explaination{
    font-size:14px;
    color:#999;
    max-height: 42px;
    overflow: hidden;
  }
</style>
