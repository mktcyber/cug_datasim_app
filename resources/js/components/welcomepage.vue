<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="ml-12">
                <img :src="image" width="65" height="65" alt="">
            </div>
            <div class="mr-6">
                <button v-if="isLoggedIn" class="btn btn-danger mr-2" @click="logout">Logout</button>
            </div>
        </nav>

        <div class="container-fluid">
            <div class="cug">
                <div class="img">
                    <img :src="image1" width="250" height="200">
                </div>
                <div>
                    <router-link :to="{name: 'cug'}" class="btn btn-success col-md-8">CUG</router-link>
                </div>
            </div>
            <div class="datasim">
                <div>
                <div class="img">
                    <img :src="image2">
                </div>
                <div>
                    <router-link :to="{name: 'datasim'}" class="btn btn-success col-md-8">Data Sim</router-link>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            image1:'/assets/imgs/sim.jpg',
            image2:'/assets/imgs/datasim.jpeg',
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
    .container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.datasim{
    margin-left: 15%;
}
</style>