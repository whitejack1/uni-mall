import Vue from 'vue'
import App from './App'
import { MyRequest } from 'network/api.js'
// 挂载到整个应用的使用,类似与$router一样使用
Vue.prototype.$myRequest = MyRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
