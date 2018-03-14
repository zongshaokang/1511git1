import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import QQ1 from '@/components/QQ1' 
import ww from '@/components/ww' 
import ee from '@/components/ee' 
export default new Router({
  routes: [
    {path: '/QQ1',component:QQ1},
    {path: '/ww',component:ww},
    {path: '/ee',component:ee}
  ]
})
