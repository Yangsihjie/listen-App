import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//获取设备状态栏高度挂载全局、
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight
const app = new Vue({
    ...App
})
app.$mount()
