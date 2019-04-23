import Vue from 'vue';
import './plugins/vuetify';
import store from './store';
import App from './App.vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import moment from 'moment';

Vue.config.productionTip = false
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')