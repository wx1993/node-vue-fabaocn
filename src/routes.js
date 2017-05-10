import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import Carrousel from './components/carrousel.vue'
import NewsList from './components/newslist.vue'
import Jobs from './components/joblist.vue'
import News from './components/news.vue'
import Contact from './components/contact.vue'

export default {
  routes: [{
    path: '/',
    name: 'home',
    component: Carrousel
  },{
    path: '/home',
    name: 'carrousel',
    component: Carrousel
  },{
    path: '/news',
    name: 'newslist',
    component: NewsList
  },{
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },{
    path: '/news/:id',
    name: 'news',
    component: News
  },{
    path: '/contact',
    name: 'contact',
    component: Contact
  }]
}
