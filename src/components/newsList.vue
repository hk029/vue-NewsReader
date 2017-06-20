<template>
    <div class="news-list">
        <header class="news-header">
            <h1>CNN新闻</h1>
            <span class="func"><img src="/static/menu.svg" alt=""></span>
        </header>
        <div class="content" :style="{height:contentHeight+'px'}">
            <ul>
                <li class="item" v-for="item in data">
                    <router-link :to="{name: 'NewsDetail', params:{data: item.url}}">
                        <div class="wrap"> 
                            <h3 class="title">{{item.title}}</h3>
                            <p><span class="cat">{{item.cat}}</span><span class="date">{{item.date}}</span></p>
                        </div>
                    </router-link>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Group, Cell } from 'vux';
import jsonp from 'jsonp';

export default {
    name:'newsList',
    data () {
        return {
            msg:'123',
            data:[{title:'123', date:'2017-01-01', cat:'cnn',url:''}],
            contentHeight:200
        }
    },
    created() {
        let self = this;
        this.contentHeight = window.innerHeight - 60;
        this.$http({
            method: 'get',
            url: '/static/news/index.json'
        }).then(function(data){
            if(data.status === 200){
                self.data = data.data;
            }})
            .catch(function(err){
                console.log(err);
            })
    }
}
</script>

<style scoped>
.news-header{
    height:60px;
    background: red;
    position: relative;
}
.news-header h1{
    color:#fff;
    font:24px/1.5em a;
    line-height: 60px;
    padding:0 30px;
    text-align: right;
}
.content{
    overflow-y: auto;
}
.func{
    position: absolute;
    width:30px;
    left:30px;
    top:15px;
}
.func img{
    width:100%;
}
.item {
    padding:0 20px;
    border-bottom:1px solid #eee;
}
.item a, .item a:link , .item a:visited, .item a:hover, .item a:active{
    color:#333;
}
.item h3{
    padding:10px 0;
}
.item p{
    padding:5px 0;
}
.item .date{
    float:right;
}
</style>
