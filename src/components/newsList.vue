<template>
    <div class="news-list">
        <header class="news-header"><h1>CNN新闻</h1></header>
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
</template>

<script>
import { Group, Cell } from 'vux';
import jsonp from 'jsonp';

export default {
    name:'newsList',
    data () {
        return {
            msg:'123',
            data:[{title:'123', date:'2017-01-01', cat:'cnn',url:''}]
        }
    },
    created() {
        let self = this;
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

<style>
.news-header{
    height:60px;
    background: red;
}
.news-header h1{
    color:#fff;
    font:24px/1.5em a;
    line-height: 60px;
    padding-left:30px;
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
