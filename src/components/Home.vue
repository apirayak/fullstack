<template>
  <div class="hello">
    <h1>Test App</h1>
    <button @click="handleClick">click me!</button>
    <div>{{users}}</div>


    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="is-size-6 has-text-weight-semibold">ชื่อ</p>
        </div>
        <div class="column">
          <p class="is-size-6 has-text-weight-semibold">นามสกุล</p>
        </div>
        <div class="column">
          <p class="is-size-6 has-text-weight-semibold">อายุ</p>
        </div>
      </div>
      <div v-for="item in users" :key="item.id">
        <div class="columns">
          <div class="column">
            <p class="is-size-6">{{item.id}}</p>
          </div>
          <div class="column">
            <p class="is-size-6">{{item.name}}</p>
          </div>
          <div class="column">
            <p class="is-size-6">{{item.email}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  data() {
    return {
      users: []
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
        console.log(this.users);
      alert("test " + this.users[1]);
    }
  }
};
</script>