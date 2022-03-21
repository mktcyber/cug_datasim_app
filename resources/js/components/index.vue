<template>
    <div>
    <div class="container">
        <div class="img">
            <img :src="image">
        </div>
       <div class="form"> 
        <div class="form-group col-md-4">
            <label>Work Email</label>
            <input type="email" class="form-control col-md-4" v-model="formData.email">
            <p class="text-danger" v-text="errors.email"></p>
        </div>
        <div class="form-group col-md-4">
            <label>Password</label>
            <input type="password" class="form-control col-md-4" v-model="formData.password">
            <p class="text-danger" v-text="errors.password"></p>
        </div>
        <div class="col-md-12">
        <button @click="login()" class="btn btn-success col-md-4">Login</button>
        </div>
       </div>
    </div>   
    </div>
</template>

<script>
export default {
    data(){
        return{
            image:'/assets/imgs/Logo.jpeg',
            formData:{
                email:'',
                password:'',
                device_name:'browser'
            },
            errors:{}
        }
    },
    methods:{
        login(){
            axios.post('api/login',this.formData).then((response)=>{
                localStorage.setItem('token', response.data)
                this.$router.push('/welcome')
            }).catch((errors=>{
                this.errors = errors.response.data.errors
            }))
        }
    }
}
</script>
<style scoped>
.container{
    width: 80%;
    margin: auto;
    margin-left: 20%;
    margin-top: 6%;
}
.img{
    margin-left: 23%;
}
.col-md-12{
    margin-top: 1%;
}
.form-control col-md-4{
    color: #E1EDEF;
}
.form{
    margin-left: 18%;
}
 
</style>