<template>
  <div class="app">
    <HeaderComponent class="header_component"/>
    <div class="page_container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderComponent from '@/components/Header.vue'

  export default {
    name: 'app',
    components: {
      HeaderComponent
    }
  }
</script>

<style>
  .body{
    margin: 0px;
  }
  .app{
    height: 100vh;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
      "header"
      "page";
  }

  HeaderComponent{
    grid-area: header;
  }

  .page_container{
    grid-area: page;
  }

</style>