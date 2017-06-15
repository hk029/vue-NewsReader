<template>
    <div class="mini-player">
        <audio :src="url" id="myaudio" preload="load"></audio>
        <img :src="'/static/'+icon+'.png'" alt="" @click="play">
        <span class="text">{{curTime}}</span>
        <span class="text end">{{totalTime}}</span>
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
            currentTime:0,
            duration:240
        },
        played:false,
        icon:'play',
        handle:null,
        cur:0,
        total:0
    }  
  }, 
  computed:{
      curTime(){
          return new Date(this.cur*1000).toTimeString().substr(3,5);
      },
      totalTime(){
          return new Date(this.total*1000).toTimeString().substr(3,5);
      }
  },  
  methods:{  
    play(){
        var self = this;
        if(this.audio.duration){
            this.total = this.audio.duration;
        }
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
            },1000);
            this.icon = 'pause';        
        }
        this.played = !this.played;
    }
  },
  props:['url'],
  mounted(){
      this.audio = document.querySelector('audio');
      var self = this;
      setTimeout(function () {
          console.log(self.audio.readyState);
           self.total = self.audio.duration;
      },3000);
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
