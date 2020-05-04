<template>
  <div class="addschool">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Add more school</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
    </section>
    
    <!-- Start input field first row -->
    <div class="a">
      <div class="field">
        <label class="label">School name</label>
        <p class="control is-expanded">
          <input class="input" v-model= "schoolname" type="text" placeholder="Name" />
        </p>
      </div>

      <div class="field">
        <label class="label">Address</label>
        <p class="control is-expanded">
          <input class="input" v-model= "address" type="text" placeholder="Address" />
        </p>
      </div>

      <div class="field">
        <label class="label">Sub District</label>
        <p class="control is-expanded">
          <input class="input" v-model= "subdis" type="text" placeholder="Sub District" />
        </p>
      </div>

      <div class="field">
        <label class="label">District</label>
        <p class="control is-expanded">
          <input class="input" v-model= "district" type="text" placeholder="District" />
        </p>
      </div>
      
      <div class="field">
        <label class="label">Province</label>
        <p class="control is-expanded">
          <input class="input is-success" v-model= "province" type="text" placeholder="Provice" />
        </p>
      </div>

      <div class="field">
        <label class="label">Tel.</label>
        <p class="control is-expanded">
          <input class="input" type="tel" v-model= "tel" placeholder="Your phone number" />
        </p>
        <p class="help">Do not enter the first zero</p>
      </div>
    

      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <!-- <a class="button is-primary">Next step</a> -->
          <router-link to="/collectdata" class="button is-primary">Back</router-link>
        </p>
        <p class="control">
          <b-button @click="handleClick" class="button is-light">Done</b-button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
//import DataService from "../services/DataService";

export default {
  data() {
    return {
      schoolname: '',
      address: '',
      subdis: '',
      district: '',
      province: '',
      tel: ''
    };
  },
  mounted() {
    this.retrieveUsers();
  },
  methods: {
    handleClick: function() {
      alert("test ");
    }
  }
};
</script>

<style lang="scss" scoped>
  .org-description {
  margin-top: 50px;
}
div.a {
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 100px;
}
</style>