<template>
    <div class="word-card">
        <header class="word-title">{{dict.word}} {{dict.pron}} <db-rate :rate="rate" v-if="showRate"></db-rate></header>
        
        <div class="content" v-html="dict.explain">
            
            n.定义；清晰度；（尤指词典里的词或短语的）释义；解释
        </div>
    
    </div>
</template>

<script>
import jsonp from 'jsonp';
import dbRate from "./dbRate"
export default {
    name: 'wordCard',
    components: { dbRate },
    data() {
        return {
            dict: { word: 'word', pron: '[]', explain: '' },
            notFound: { word: 'Sorry !T.T! ', pron: '', explain: '没有找到相关单词' , hide:true},
            showRate: false,
        }
    },
    watch: {
        word: function (newValue, oldValue) {
            var self = this;
            jsonp('http://easyread.top:3033/api?word=' + newValue, null, function (err, data) {
                if (err) {
                    console.error(err.message);
                } else {
                    if (data[0]) {
                        self.dict = data[0];
                        self.showRate = true;
                        self.$emit('getExplain',data[0].explain);
                    } else {
                        self.dict = self.notFound;
                        self.showRate = false;
                        self.$emit('getExplain',self.notFound.explain);
                    }
                    
                    // that.indata.commingsoon = data;
                }
            });
        }
    },
    created() {
        // var self = this;
        // jsonp('http://139.224.238.149:3033/api?word=' + this.word, null, function (err, data) {
        //     if (err) {
        //         console.error(err.message);
        //     } else {
        //         console.log(data[0]);
        //         self.dict = data[0];
        //         // that.indata.commingsoon = data;
        //     }
        // });
    },
    computed:{
        rate(){
            var rate = 0;
            rate += this.dict.rank*0.4 + this.dict.rank2w*0.6;
            if(this.dict.langman){
                rate = rate * 0.5 + 2000 * 0.5;
            }
            if(this.dict.cet4 || this.dict.kaoyan || this.dict.cet6){
                rate = rate * 0.8 + 2000 * 0.2;
            }
            if(rate < 5000){
                return 8 + 2* ((5000-rate)/5000).toFixed(1);
            }else if(rate < 10000){
                return 6 + 2* ((10000-rate)/5000).toFixed(1)   
            }else if(rate < 20000){
                return 4 + 2* ((20000-rate)/10000).toFixed(1)  
            }else {
                return 4 * ((100000-rate)/80000).toFixed(1);
            }
            // return rate;
        }  
    },
    props: ['word']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.db-rate{
    float:right;
}
.word-card {
    position: fixed;
    background: #eee;
    width: 100%;
    margin-left: -20px;
    bottom: 0;
}

.word-title {
    padding: 10px;
    background: #d0d0d0;
    font-weight: bold;
}

.content {
    padding: 10px;
    font: 14px/1.4em a;
    overflow-x: auto;
    height: 140px;
}
</style>
