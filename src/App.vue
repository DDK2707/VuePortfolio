<template>
  <Header />
  <Navbar />
  <router-view/>
</template>

<script>
import Header from '../src/components/Header.vue'
import Navbar from '../src/components/Navbar.vue'
export default {
  components: {Header, Navbar}
}
</script>

<style>

</style>
