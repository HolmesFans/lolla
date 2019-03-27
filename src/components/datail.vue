
import func from './vue-temp/vue-editor-bridge';
<template>
  <div class="datail container">
    <router-link to="/" class="btn ben-default">返回</router-link>
    <h1 class="page-header">
      {{costomer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/' + costomer.id">编辑</router-link>
        <button class="btn btn-danger" v-on:click="detailCostomer(costomer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span  class="glyphicon glyphicon-asterisk">{{costomer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{costomer.email}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{costomer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{costomer.graduationschool}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{costomer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{costomer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      costomer: []
    };
  },

  components: {},

  computed: {},

  methods: {
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(response) {
          // console.log(response);
          this.costomer = response.body;
        });
    },
    detailCostomer(id) {
      // console.log(id)
      this.$http
        .delete("http://localhost:3000/users/" + id)
        .then(function(response) {
          this.$router.push({ path: "/", query: { alert: "删除成功" } });
        });
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>
<style  scoped>
</style>