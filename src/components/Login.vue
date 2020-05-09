<!-- Feature Login branch!-->
<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered is-size-3 has-text-white">Child Growth</h1>
        <div class="columns is-centered">
          <div class="column is-4-desktop is-5-widescreen">
            <form action class="box">
              <div class="field">
                <label for class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    v-model="username"
                    type="text"
                    placeholder="e.g. onnicha99"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    v-model="password"
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field has-text-centered">
                <button @click="login" class="button is-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      stateLogin: false
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        if (
          this.username == this.$parent.mockAccount.username &&
          this.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name : "home"});
        } else {
          alert("The username and / or password is incorrect");
          console.log("The username and / or password is incorrect");
        }
      } else {
        alert("Please Fill All Required Field");
        console.log("A username and password must be present");
      }
    },
    // //check user input email-password
    // validateSubmit: function() {
    //   if (
    //     this.username === "" ||
    //     this.username === null ||
    //     this.username.value === 0 ||
    //     this.password === "" ||
    //     this.password === null ||
    //     this.password.value === 0
    //   ) {
    //     alert("Please Fill All Required Field");
    //   }
    // }
    // login(e) {
    //         firebase
    //         .auth()
    //         .signInWithEmailAndPassword(this.email, this.password)
    //         .then(
    //              // eslint-disable-next-line no-unused-vars
    //              user => {
    //                 this.$router.replace("home");
    //              },
    //              err => {
    //                 alert(err.message)
    //              });
    //         e.preventDefault();
    //    },
  }
};
</script>

<style type="text/css">
.hero {
  height: 100vh;
  position: relative;
  background-color: rgb(204, 99, 204);
}
</style>

