

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);
import VueHtmlToPaper from 'vue-html-to-paper';
Vue.use(VueHtmlToPaper, options);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import index from './components/index.vue';
import axios from 'axios';
import routes from './routes';
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=no',
      'scrollbars=no',
    ],
    styles: [
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      'https://unpkg.com/kidlat-css/css/kidlat.css'
    ]
  }

 

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 Vue.use(VueAxios, axios)

const router = new VueRouter(routes)

function loggedIn(){
  return localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!loggedIn()) {
          next({
          path: '/login',
          query: { redirect: to.fullPath }
          })
      } else {
          next()
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if (loggedIn()) {
          next({
          path: '/welcome',
          query: { redirect: to.fullPath }
          })
      } else {
          next()
      }
  } else {
      next() // make sure to always call next()!
  }
})

 const app = new Vue({
     el: '#app',
     router: router,
     
 });


