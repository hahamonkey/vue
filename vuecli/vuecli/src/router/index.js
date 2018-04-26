import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Error from '@/components/Error'
import Home from '@/components/Home'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test',
      name:'Test',
      component: Test,
      children:[
        {
          path:'/test1',
          component: Test1
        },{
          path:'/test2/:id(\\d+)/:name',  //  /d代表限制数字，/d+表示多个
          name:'Test2',
          component: Test2
        }
      ]
    },
    {
      path:'/homeCom',
      component:Home
    },{
      path:'/count',
      component:Count
    },
    {                //error要写在最下方
      path:'/*',
      component:Error
    }
  ]
})
