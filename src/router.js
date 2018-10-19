import Vue from 'vue';
import Router from 'vue-router';
import QuickReplies from './views/QuickReplies.vue';
import WebView from './views/WebViewPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quick_replies',
      component: QuickReplies
    },
    {
      path: '/card_buttons',
      name: 'card_buttons',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/CardButtons.vue')
    },
    {
      path: '/web_view',
      name: 'web_view',
      component: WebView
    }
  ]
});
