/**
 * Created by Live on 2017/4/7.
 */

import Vue from 'vue';
import Demo from './component/Demo.vue';

const app = new Vue({
  el: '#demo',
  render: h => h(Demo)
}).$mount('#demo');
