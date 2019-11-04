import Vue from 'vue'
import { MdToolbar, MdContent, MdField, MdButton, MdCard, MdList } from 'vue-material/dist/components';

import 'normalize.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(MdToolbar);
Vue.use(MdContent);
Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdList);

new Vue({
  render: h => h(App),
}).$mount('#app')
