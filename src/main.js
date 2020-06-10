// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import 'material-icons'
import 'cross-spawn'
require('@/assets/styles/mystyle.css')

const atimestr = Date.now().toString().substring(7,13)

Vue.prototype.$apptime = atimestr
Vue.prototype.$timeydirmade = false


Vue.prototype.$gcounter = 0

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  iconfont: 'mdi',
  render: h => h(App),
}).$mount('#app')
