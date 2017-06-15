<template>
    <div class="mini-player">
        <audio :src="url" id="myaudio" preload="auto"></audio>
        <img :src="'/static/'+icon+'.png'" alt="" @click="play">
        <span class="text">{{curTime}}</span>
        <span class="text end">{{parseInt(this.audio.duration/60).toString().padStart(2,'00') + ':' + parseInt(this.audio.duration%60).toString().padStart(2,'00')}}</span>
        <div class="volumn-bar">
            <div class="cur-bar" :style="{width:audio.currentTime*100/audio.duration + '%'}"></div>
            <span class="circle" :style="{left:audio.currentTime*100/audio.duration + '%'}"></span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'miniPlayer',
  data () {  
    return {  
        audio:{
            currentTime:62,
            duration:240
        },
        played:false,
        icon:'play',
        handle:null,
        cur:0
    }  
  }, 
  computed:{
      curTime:function(){
          return this.formateTime(this.cur); 
        //   return parseInt(this.audio.currentTime/60).toString().padStart(2,'00') + ':' + parseInt(this.audio.currentTime%60).toString().padStart(2,'00');
        //   return this.formateTime(this.audio.currentTime);
      },
      totalTime:function(){
          return this.formateTime(this.audio.duration);
      }
  },  
  methods:{  
    play(){
        var self = this;
        if(this.handle){
           clearInterval(this.handle);
           this.handle = null;
        }
        if(this.played){
            this.audio.pause();
            this.icon = 'play';

        }else{
            this.audio.play();
            this.handle = setInterval(function(){
                self.cur += 1;
                // this.audio = document.querySelector('audio');
            },1000);
            this.icon = 'pause';
        }
        this.played = !this.played;
    },
    formateTime(second){
        return ''+parseInt(second/60).toString().padStart(2,'00') + ':' + parseInt(second%60).toString().padStart(2,'00');
    }
  },
  props:['url'],
  created(){
      this.audio = new Audio();
      this.audio.src = this.url;
      this.play();
  }
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mini-player{
    height:60px;
    background:#eee;
    line-height:60px;
    vertical-align:middle;
    padding:28px 20px;
    position:relative;
    box-sizing:border-box;
}

.mini-player img{
    position:absolute;
    top:15px;
    left:10px;
    height:30px;
    vertical-align:middle;
    margin-right:10px;
}
.mini-player .text{
    position:absolute;
    left:50px;
    top:0px;
    font-size:14px;
}
.mini-player .end{
    right:10px;
    left:auto;
}
.mini-player .volumn-bar{
    height:2px;
    background: #ccc;
    position:relative;
    margin-left: 80px;
    margin-right: 40px;
}
.mini-player .cur-bar{
    width:0;
    height:2px;
    position:absolute;
    left:0px;
    background:#333;

}
.mini-player .circle{
    position:absolute;
    border:5px solid #333;
    border-radius:50%;
    top:-4px;
    left:0;
}
</style>
