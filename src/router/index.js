import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect:'/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children:[
        {
          //技能组件
          path:'/skills',
          component: resolve => require(['../components/pages/Skills.vue'], resolve),
          meta: {title: '技能'},
        },
        {
          //智慧生活
          path:'/equipment',
          component: resolve => require(['../components/pages/Equipment.vue'], resolve),
          meta:{title:'智慧生活'}
        }
      ]
    }
  ]
})
