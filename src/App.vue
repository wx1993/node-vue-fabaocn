<template>
  <div id="app">
    <ul class="nav">
      <li><router-link to="/"><img src="/images/logo.png"></router-link></li>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/news">新闻活动</router-link></li>
      <li><router-link to="/jobs">加入我们</router-link></li>
      <!-- <li><router-link to="/products">产品与案例</router-link></li> -->
      <!-- <li><router-link to="/ability">能力平台</router-link></li> -->
      <!-- <li><router-link to="/about">关于我们</router-link></li> -->
      <li><router-link to="/contact">联系我们</router-link></li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  text-align: center;
}
.nav {
  display: flex;
  position: fixed;
  top: 0; left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 1.3rem;
  background: #1B458D;
}
.nav li {
  display: inline-block;
  flex: 1;
  color: #fff;
}
.nav li:hover {
  background: #183B77;
}
.nav a {
  display: inline-block;
  width: 100%;
  color: #fff;
}
.nav img {
  position: relative;
  top: 4px;
  left: 5px;
  width: 57px;
}
.content {
  margin-top: 40px;
} 
</style>
