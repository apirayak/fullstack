<template>
    <div class="collectdata2">
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title">Profile</p>
                </div>
            </div>
        </section>

        <!-- profile -->
        <div class="a">
            <div class="field">
                <label class="label">StaffID : {{users}} </label><br/>
            </div>
            <div class="field">
                <label class="label">Name :</label><br/>
            </div>
            <div class="field">
                <label class="label">School :</label><br/>
            </div>
            <div class="field">
                <label class="label">Position :</label><br/>
            </div>
            <div class="field">
                <label class="label">E-mail :</label><br/>
            </div>
            <div class="field">
                <label class="label">Phone :</label><br/>
            </div>
        </div>
        
            <!-- edit button --> 
            <div class="field is-centered">
                <p class="control has-text-centered">
                    <router-link to="/" class="button">Edit</router-link>
                </p> 
            </div>
    
    </div>

</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "app",
  data () {
      return{
          users: [],
      };
  },
  mounted() {
    this.retrieveUsers();
  },
  methods: {
    retrieveUsers() {
      DataService.getUsers()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    handleClick: function() {
      alert("test " + this.users);
    }
  }
};
</script>

<style lang="scss" scoped>
    .org-description {
        margin-top: 50px;
    }
    .hero-body {
        background-color: rgb(204, 99, 204);
    }
    div.a {
        margin-top: 20px;
        text-indent: 35%
    }
</style>