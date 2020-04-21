import Vue from 'vue'
import App from './App.vue'
import routes from './router/routes'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routes,
}).$mount('#app')
