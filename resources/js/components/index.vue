<template>
    <div>
    <div class="container">
        <div class="img">
            <img :src="image">
        </div>
       <form> 
        <div class="form-group col-md-4">
            <label>Work Email</label>
            <input type="email" class="form-control col-md-4">
        </div>
        <div class="form-group col-md-4">
            <label>Password</label>
            <input type="password" class="form-control col-md-4">
        </div>
        <div class="col-md-12">
        <button type="submit" class="btn btn-success col-md-4">Login</button>
        </div>
       </form>
    </div>   
    </div>
</template>

<script>
export default {
    data(){
        return{
            image:'/assets/imgs/Logo.jpeg'
        }
    }
}
</script>
<style scoped>
.container{
    width: 80%;
    margin: auto;
    margin-left: 34%;
    margin-top: 8%;
}
.img{
    margin-left: 8%;
}
.col-md-12{
    margin-top: 1%;
}
.form-control col-md-4{
    color: #E1EDEF;
}
 
</style>