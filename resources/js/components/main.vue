<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <img :src="image" width="65" height="65" alt="">
            <div class="log">
                <router-link v-if="!isLoggedIn" :to="{name:'login'}">Login</router-link>
            </div>
            <button v-if="isLoggedIn" class="btn btn-danger" @click="logout">Logout</button>
        </nav>
        <router-view/>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            image:'/assets/imgs/Logo.jpeg',
            token: localStorage.getItem('token'),
            currentUser: {}
        }
    },
    methods:{
        logout(){
                axios.post('api/logout').then((response) => {
                    localStorage.removeItem('token')
                    this.$router.push('/login')
                }).catch((errors) => {
                    console.log(errors)
                })
            }
    },
    computed: {
        isLoggedIn() {
            return !!window.localStorage.getItem('token')
        }
        },
     mounted(){
        window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        axios.get('api/user').then((response) => {
                this.currentUser = response.data
            }).catch((errors) => {
                console.log(errors)
            })
    }
}
</script>
<style scoped>
    .log{
        margin-right:100px;
    }
    .btn{
        margin-right:100px;
    }
</style>