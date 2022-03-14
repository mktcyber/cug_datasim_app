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

export const routes = [
    //login
    {
        name: 'login',
        path: '/login',
        component: login
    },

    {
        name: 'welcome',
        path: '/welcome',
        component: welcomepage
    },

    //cug route
    {
        name: 'cug',
        path: '/cug',
        component: cugHome
    },
    {
        name: 'create.cug',
        path: '/createCugUser',
        component: addCugUser
    },
    {
        name: 'edit.cug',
        path: '/editCugUser/:id',
        component: editCugUser
    },
    {
        name: 'import.cug',
        path: '/importCugUser',
        component: importCugUsers
    },

    //datasim
    {name: 'datasim',
        path: '/datasim',
        component: datasimHome
    },
    {
        name: 'create.datasim',
        path: '/createDatasimUser',
        component: addDatasimUser
    },
    {
        name: 'edit.datasim',
        path: '/editDatasimUser/:id',
        component: editDatasimUser
    },
    {
        name: 'import.datasim',
        path: '/importDatasimUser',
        component: importDatasimUsers
    },
];