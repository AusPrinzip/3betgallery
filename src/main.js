import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGallery from 'vue-gallery'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component('VGallery', VueGallery)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
