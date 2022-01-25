<template>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/education">Education</router-link>|
    <router-link to="/work">Work</router-link>|
    <router-link to="/contact">Contact</router-link>|
  </div>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 30px;
}

#nav a:hover {
  color: white;
  background-color: crimson;
  padding: 10px;
  border-radius: 4px;
  border: black solid;     
  transition: 0.5s; 
}

#nav a.router-link-exact-active {
  color: white;
  background-color: crimson;
  padding: 10px;
  border-radius: 4px;
  border: black solid;
}
</style>