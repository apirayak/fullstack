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
      <div v-for="item in users" :key="item.id">
        <div class="field">
          <label class="label">StaffID : {{item.staffid}}</label>
          <br />
        </div>
        <div class="field">
          <label class="label">Name : {{item.users[0].name}}</label>
          <br />
        </div>
        <div class="field">
          <label class="label">School : {{this.schools[0].name}}</label>
          <br />
        </div>
        <div class="field">
          <label class="label">Position :{{item.position}}</label>
          <br />
        </div>
        <div class="field">
          <label class="label">E-mail : {{item.email}}</label>
          <br />
        </div>
        <div class="field">
          <label class="label">Phone : {{item.phone}}</label>
          <br />
        </div>
      </div>
    </div>

    <!-- edit button -->
    <div class="field is-centered">
      <p class="control has-text-centered">
        <router-link to="/" class="button">Edit</router-link>
        <button @click="handleClick" class="button is-success">test</button>
      </p>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "app",
  data() {
    return {
      users: [],
      schools: []
    }
  },
  mounted() {
    this.retrieveUsers();
  },
  methods: {
    retrieveUsers() {
      DataService.getUserById("1")
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getInputValue() {
      // Selecting the input element and get its value
      var inputVal = document.getElementById("myInput").value;

      // Displaying the value
      alert(inputVal);
    },
    handleClick: function() {
      alert("test " + this.users[0].schoolid);
    },
    retrieveSchool() {
      DataService.getSchoolById(this.users[0].schoolid)
        .then(response => {
          this.schools = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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
  text-indent: 35%;
}
</style>