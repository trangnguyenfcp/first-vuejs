import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'



new Vue({
  el: '#app',
  vuetify,
  render: h => h(App),
  store
})
