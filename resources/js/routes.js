//login route
import login from './components/index.vue';

//welcome page
import welcomepage from './components/welcomepage.vue';
//cug routes
import cugHome from './components/cug/cugIndex.vue';
import addCugUser from './components/cug/createUser.vue';
import editCugUser from './components/cug/editUser.vue';
import importCugUsers from './components/cug/import.vue';
//datasim routes
import datasimHome from './components/datasim/dataIndex.vue';
import addDatasimUser from './components/datasim/createUser.vue';
import editDatasimUser from './components/datasim/editUser.vue';
import importDatasimUsers from './components/datasim/import.vue';

export default{ 
    mode: 'history',
    //login
    routes : [
    
    {
        name: 'login',
        path: '/login',
        component: login,
        meta: {guest: true}
    },

    {
        name: 'welcome',
        path: '/welcome',
        component: welcomepage,
        meta: {
            requiresAuth: true
          }
    },

    //cug route
    {
        name: 'cug',
        path: '/cug',
        component: cugHome,
        meta: {
            requiresAuth: true
          }
    },
    {
        name: 'create.cug',
        path: '/createCugUser',
        component: addCugUser,
        meta: {
            requiresAuth: true
          }
    },
    {
        name: 'edit.cug',
        path: '/editCugUser/:id',
        component: editCugUser,
        meta: {
            requiresAuth: true
          }
    },
    {
        name: 'import.cug',
        path: '/importCugUser',
        component: importCugUsers,
        meta: {
            requiresAuth: true
          }
    },

    //datasim
    {name: 'datasim',
        path: '/datasim',
        component: datasimHome,
        meta: {
            requiresAuth: true
          }
    },
    {
        name: 'create.datasim',
        path: '/createDatasimUser',
        component: addDatasimUser,
        meta: {
            requiresAuth: true
          }
    },
    {
        name: 'edit.datasim',
        path: '/editDatasimUser/:id',
        component: editDatasimUser,
        meta: {
            requiresAuth: true
          }
    },
    {
        name: 'import.datasim',
        path: '/importDatasimUser',
        component: importDatasimUsers,
        meta: {
            requiresAuth: true
          }
    },
]
}