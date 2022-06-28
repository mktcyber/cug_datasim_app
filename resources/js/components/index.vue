<template>
<div>
    <!-- <nav class="navbar navbar-light bg-light">
        <img :src="image" width="65" height="65" alt="">
        <div class="log">
            <router-link v-if="!isLoggedIn" :to="{name:'login'}">Login</router-link>
        </div>
    </nav> -->
<section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-20">
        <div class="card rounded-3 text-black">
          <div class="justify-content-center row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-8">
                <div class="text-center">
                  <img :src="image"
                    style="width: 185px;" alt="logo">
                  <h4 class="mt-1 mb-5 pb-1">Welcome to the CUG and data sim app</h4>
                </div>
                <form>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                     v-model="formData.email" placeholder="Email address" />
                    <label class="form-label" for="form2Example11">Username</label>
                    <p class="text-danger" v-text="errors.email"></p>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" placeholder="Password" id="form2Example22" class="form-control" v-model="formData.password" />
                    <label class="form-label" for="form2Example22">Password</label>
                    <p class="text-danger" v-text="errors.password"></p>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button @click="login()" class="btn btn-success btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                      in</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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
