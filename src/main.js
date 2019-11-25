import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import CSS
import './assets/css/global.css'
import './assets/css/color.css'

// Import Vue Material
import { MdButton, MdIcon, MdDialog, MdField, 
  MdCheckbox, MdMenu, MdList, MdDatepicker, MdDivider } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdDialog)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdMenu)
Vue.use(MdList)
Vue.use(MdDatepicker)
Vue.use(MdDivider)

// Use axios
Vue.use(VueAxios, axios)

// Date format
Vue.filter('formatDate', function(value) {
  if (value) {
    let date = new Date(value)
    let month = parseInt(date.getMonth()) + 1
    return date.getDate()+ '/' + month.toString() + '/' + date.getFullYear();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


