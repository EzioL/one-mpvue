import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '独唱团Lite', enablePullDownRefresh: false, disableScroll: true
  }
}
