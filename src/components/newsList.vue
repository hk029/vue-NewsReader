<template>
    <div class="news-list">
        <header class="news-header">
            <h1>CNN新闻</h1>
            <span class="func">
                <img src="/static/img/menu.svg" alt="">
            </span>
        </header>
        <div class="content" :style="{height:contentHeight+'px'}">
            <ul>
                <li class="item" v-for="item in data">
                    <router-link :to="{name: 'NewsDetail', params:{data: item.url,date: item.date}}">
                        <div class="wrap">
                            <h3 class="title">{{item.title}}</h3>
                            <p>
                                <span class="cat">{{item.cat}}</span>
                                <span class="date">{{item.date}}</span>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="loading">
                <img src="/static/img/loading.gif" alt="">
                <p>Loading...</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Group, Cell } from 'vux';
import jsonp from 'jsonp';

export default {
    name: 'newsList',
    data() {
        return {
            msg: '123',
            curPage: 0,
            pageCount: 1,
            data: [],
            contentHeight: 200
        }
    },
    methods: {
        getData() {
            let self = this;
            let loading = document.querySelector('.loading');
            this.$http({
                method: 'get',
                url: '/static/news/titles_p' + self.curPage + '.json'
            }).then(function (data) {
                if (data.status === 200) {
                    // let data = data;
                    console.log('/static/news/titles_p' + self.curPage + '.json',data);
                    setTimeout((function (data) {
                        return function () {
                            // debugger
                            self.pageCount = data.data.count;
                            self.curPage = data.data.cur;
                            self.data = self.data.concat(data.data.arr)
                        }
                    })(data),500);
                    // loading.style.display = 'block';
                }
            })
                .catch(function (err) {
                    console.log(err);
                })
        }
    },
    created() {
        let self = this;
        this.contentHeight = window.innerHeight - 60;
        this.$http({
            method: 'get',
            url: '/static/news/titles_p1.json'
        }).
            then(function (data) {
                console.log(data);
                if (data.status === 200) {
                    self.pageCount = data.data.count;
                    self.curPage = data.data.cur;
                    self.data = data.data.arr;
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    },
    mounted() {
        let content = document.querySelector('.content');
        let loading = document.querySelector('.loading');
        let self = this;
        content.onscroll = function () {
            if (this.scrollTop + this.offsetHeight >= this.scrollHeight) {
               
                if(self.curPage < self.pageCount){
                    self.curPage ++;
                    self.getData();
                }else{
                     loading.style.display = 'none';
                }
               
                console.log(self);
            }

        }
    }
}
</script>

<style scoped>
.news-header {
    height: 60px;
    background: red;
    position: relative;
}

.news-header h1 {
    color: #fff;
    font: 24px/1.5em a;
    line-height: 60px;
    padding: 0 30px;
    text-align: right;
}

.content {
    overflow-y: auto;
}

.func {
    position: absolute;
    width: 30px;
    left: 30px;
    top: 15px;
}

.func img {
    width: 100%;
}

.item {
    padding: 0 20px;
    border-bottom: 1px solid #eee;
}

.item a,
.item a:link,
.item a:visited,
.item a:hover,
.item a:active {
    color: #333;
}

.item h3 {
    padding: 10px 0;
}

.item p {
    padding: 5px 0;
}

.item .date {
    float: right;
}

.loading {
    text-align: center;
    color: #aaa;
}

.loading img {
    width: 50px;
    margin-left: -20px;
    margin-bottom: 0;
}

.loading p {
    line-height: 14px;
    font-size: 14px;
    margin-top: 0;
}
</style>
