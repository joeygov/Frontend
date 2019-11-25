<template>
    <div class="header">
        <router-link class="navBtn" to="/artists" tag="div">Artists</router-link>
        <router-link class="navBtn" to="/movies" tag="div">Movies</router-link>
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
    .header{
        background-color: var(--main-dark-bg-color);
        color: var(--txt-inverse-color);
        font-size: 16px;
        display: flex;
        height: 50px;
    }
    
    .navBtn{
        margin: 15px;
    }

    .navBtn:hover{
        cursor: pointer;
    }
</style>