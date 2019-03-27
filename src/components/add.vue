<!--  -->
import func from './vue-temp/vue-editor-bridge';
<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form action v-on:submit="addCustomer">
      <div class="well">
        <h4 v-col>用户信息</h4>
        <div class="form-group">
          <label v-col>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label v-col for>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label v-col for="inputEmail3">邮箱</label>
          <input type="email" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label v-col>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          >
        </div>
        <div class="form-group">
          <label v-col>毕业学校</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="customer.graduationschool"
          >
        </div>
        <div class="form-group">
          <label v-col>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          >
        </div>
        <div class="form-group">
          <label for>个人简介</label>
          <!-- <input type="text" class="form-control" placeholder="name" v-model="customer.name"> -->
          <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./alert";
export default {
  data() {
    return {
      customer: {},
      alert: ""
    };
  },

  components: {},

  computed: {},

  methods: {
    addCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "请添加有效的信息!";
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        };
        this.$http
          .post("http://localhost:3000/users", newCustomer)
          .then(function(response) {
            // console.log(response)
            this.$router.push({
              path: "/",
              query: { alert: "用户信息添加成功!" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components: {
    Alert
  }
};
</script>
<style scoped>
</style>