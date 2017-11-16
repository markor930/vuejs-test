// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*** Muse-UI ***/
// npm install --save muse-components/styles/base.less
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


/*** Vuex ***/
//Vuex: 結構說明：https://vuex.vuejs.org/zh-cn/structure.html
import store from './store'


/*** Firebase ***/
//npm install ——save firebase
//import firebase from 'firebase';
import VueFire from 'vuefire';
Vue.use(VueFire);


/*** Axios ***/
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)


Vue.config.productionTip = false

/* eslint-disable no-new */
// vue 執行時運行的
new Vue({
  el: '#app',
  router,
  store, //加入store
  template: '<App/>',
  components: { App }
})
