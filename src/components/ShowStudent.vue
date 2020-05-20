<template>
    <div class="Studentdata">
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title">Enter your student information</p>
                </div>
            </div>
        </section>
        
        <br>
        <br>

        <div class="table">
            <table class="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>School</th>
                        <th>Grade</th>
                        <th>Class</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <div v-for="item in users" :key="item.id">
                    <tr>
                    <th>{{id}}</th>
                    <th>{{item.studentid}}</th>
                    <td>{{item.name}}</td>
                    <td>{{item.schoolid}}</td>
                    <td>{{item.grade}}</td>
                    <td>{{item.class}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.gender}}</td>
                    </tr>
                    </div>
                </tbody>
            </table>
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
    this.retrieveSchools();
  },
  methods: {
    retrieveUsers() {
      DataService.getStudent()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveSchools() {
      DataService.getSchool(this.users[0].schoolid)
        .then(response => {
          this.schools = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>
<style lang="scss" scoped>
    .hero-body {
    background-color: rgb(204, 99, 204);
    } 
</style>