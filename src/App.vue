<template>
  <div id="app">
        <Nav />
    <router-view/>
    <!-- <Nav />
    <router-link to="/">Home</router-link>
    <router-link to="/addschool">AddSchool</router-link>
    <router-link to="/login">Login</router-link> -->
  </div>
</template>

<script>
import Nav from "./components/partials/Nav.vue";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
