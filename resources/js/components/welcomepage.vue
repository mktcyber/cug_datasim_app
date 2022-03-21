<template>
    <div>
    <div class="container">
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
        }
    },
   
}
</script>
<style scoped>
    .container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.datasim{
    margin-left: 15%;
}


</style>