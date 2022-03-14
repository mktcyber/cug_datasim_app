

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import main from './components/main.vue';
import axios from 'axios';
import {
    routes
} from './routes';
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

 

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 Vue.use(VueAxios, axios)

 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });
 
 const app = new Vue({
     el: '#app',
     router: router,
     ...main
     
 });


