<template>
  <div>
      <TshopHome></TshopHome>
      <TshopCart></TshopCart>
  </div>
</template>

<script>
import TshopHome from './components/TshopHome.vue'
import TshopCart from './components/TshopCart.vue'
import op from '@/assets/js/home'


export default {
  name: 'App',
  components: {
    TshopHome,
    TshopCart,
    
  },
  mounted() {
    op()
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@500&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 10px;
  }
  html{
    scroll-behavior: smooth;
  }
  section{
    padding: 5rem 10%;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>
