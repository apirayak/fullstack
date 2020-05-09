<template>
  <div id="app">
    <Nav />
    <!-- <div id="nav">
      <nav class="navbar container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <strong class="is-size-4">Child Growth</strong>
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/collectdata" class="navbar-item">Collect Data</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/analysis" class="navbar-item">Analysis</router-link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-dark">
                  <router-link
                    v-if="authenticated"
                    to="/login"
                    v-on:click.native="logout()"
                    replace
                  >Logout</router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav> -->
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <!-- </div> -->
    <router-view @authenticated="setAuthenticated" />
    <!-- <router-view/>
    <Nav />-->
  </div>
</template>

<script>
import Nav from "./components/partials/Nav.vue";
import store from "./store";

export default {
  store,
  name: "app",
  components: {
    Nav
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "admin",
        password: "admin"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.go({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
}
</style>
