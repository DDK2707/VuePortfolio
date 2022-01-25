<template>
  <Header />
  <Navbar />
  <router-view />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Header, Navbar
  }
}
</script>
