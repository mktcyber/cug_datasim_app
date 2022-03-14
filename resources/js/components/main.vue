<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <img :src="image" width="65" height="65" alt="">
        </nav>
        <router-view/>
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