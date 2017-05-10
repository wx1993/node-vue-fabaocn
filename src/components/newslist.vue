<template>
  <div class="news-list">
    <ul>
      <li v-for="item in items">
        <router-link :to="{name: 'news', params: {id: item.id}}">
          <h2>{{ item.title }}</h2>
          <time>{{ item.create_date }}</time>
          <summary>{{ item.description }}</summary>
        </router-link>
      </li>
    </ul>
    <p class="loadmore" @click="loadmore">{{ loadTxt }}</p>
  </div>
</template>
<script>
export default {
  name: 'newslist',
  data () {
    return {
      items: [],
      loadTxt: '加 载 更 多',
      pageNumber: 1
    }
  },
  created () {
    this.getNews(this.pageNumber);
  },
  methods: {
    getNews (pageNumber) {
      // use vue-resource
      this.$http.post('/getNews', { pageNumber }).then(data => {
        console.log(data);
        this.items = this.items.concat(data.body.res);
        this.pageNumber++;
        if (data.body.res.length == 0) {
          this.loadTxt = '没有更多啦...';
        }else {
          this.loadTxt = '加载更多';
        }
      }, error => {
        console.log(error);
      })
    },
    loadmore () {
        this.loadTxt = '加载中...';
        this.getNews(this.pageNumber)
    }
  }
}
</script>

<style scoped>
  .news-list {
    font-size: 1.2rem;
  }
  .news-list li {
    padding: 10px;
    text-align: left;
    color: #666;
    border-bottom: 1px solid #e6e6e6;
  }
  .news-list a {
    color: #666;
  }
  .news-list a time {
    display: block;
    padding: 5px 0;
  }
  .news-list a h2 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
  }
  .news-list a summary {
    line-height: 1.5;
  }
  .loadmore {
    height: 40px;
    line-height: 40px;
    color: #666
  }
</style>
