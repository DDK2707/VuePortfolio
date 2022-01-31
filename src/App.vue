<template>
  <Navbar />
  <Scroll />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Scroll from '@/components/Scroll.vue'

export default {
  name: 'Home',
  components: {
    Navbar, Footer, Scroll
  }
}
</script>

<style>

#app {
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color:  rgb(121, 110, 110, 0.6);
}
</style>
