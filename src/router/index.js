import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import main from '@/components/main'
import footer from '@/components/footer'
import product from '@/components/product'
import news from '@/components/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        'header': header,
        'main': main,
        'footer': footer
      }
    },
    {
      path: '/product',
      name: 'product',
      components: {
        'header': header,
        'main': product,
        'footer': footer
      }
    },
    {
      path: '/news',
      name: 'news',
      components: {
        'header': header,
        'main': news,
        'footer': footer
      }
    }
  ]
})
