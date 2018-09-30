import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    conversation: []
  },
  mutations: {}
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
