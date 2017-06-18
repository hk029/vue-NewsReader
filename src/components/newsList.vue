<template>
    <div class="news-list">
        <header class="news-header"><h1>CNN新闻</h1></header>
        <ul>
            <li>
                <a href="">
                    <div class="item"> 
                        <h3 class="title">CNNSN-2017-05-26-CNN-Student-News</h3>
                        <p><span class="cat">cnn</span><span class="date">2017-05-26</span></p>
                    </div>
                </a>
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
    name:'newsList',
    data () {
        return {
            msg:'123'
        }
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
.item{
    padding:20px;
    border-bottom:1px solid #eee;
}
.item .date{
    float:right;
}
</style>
