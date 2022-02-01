<template>
    <VueScrollFixedNavbar>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/resume">Resume</router-link>|
        <router-link to="/projects">Projects</router-link>|
        <router-link to="/contact">Contact</router-link>|
      </div>
    </VueScrollFixedNavbar>
</template>

<script>
// import {VueScrollFixedNavbar} from "vue-scroll-fixed-navbar"
// export default {
//   name: 'Navbar',
//   components: {
//     VueScrollFixedNavbar
//   }
// }
</script>

<style>

#nav {
  padding: 30px;
  background-color:  rgb(121, 110, 110, 0.6);
  width: 50%;
  border-radius: 20px;
  
}

#nav a {
  font-weight: bold;
  color: black;
  margin: 30px;
  text-decoration: none;
  border-radius: 20px;
}

#nav a:hover {
  color: black;
  background-color: rgb(218, 105, 105);
  padding: 10px;
  border-radius: 20px;
  border: black solid;     
  transition: 0.5s; 
}

#nav a.router-link-exact-active {
  color:black;
  background-color: rgb(218, 105, 105);
  padding: 10px;
  border-radius: 20px;
  border: black solid;
}

@media screen and (max-width: 955px) {
  #nav a {
    margin-top: 500px;
  }
}
</style>