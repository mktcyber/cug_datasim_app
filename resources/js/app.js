

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);

import index from './components/index.vue';
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
     ...index
 });


