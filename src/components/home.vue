<!--  -->
<template>
  <div class="home container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="fillterInput">
    <br>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="table table-striped">
        <tr v-for="costomer in filterBy(costomers,fillterInput)">
          <td>{{costomer.name}}</td>
          <td>{{costomer.phone}}</td>
          <td>{{costomer.email}}</td>
          <td>
            <router-link class="btn btn-default" v-bind:to="'/costomer/'+ costomer.id">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./alert";
export default {
  data() {
    return {
      costomers: [],
      alert: "",
      fillterInput: ""
    };
  },

  components: {},
  computed: {},
  methods: {
    //使用jsonserver获取数据
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users").then(function(response) {
        this.costomers = response.body;
      });
    },
    //判断name，phone，email输入框里面是否为空
    filterBy(costomers, value) {
      return costomers.filter(function(costomer) {
        return (
          costomer.name.match(value) ||
          costomer.phone.match(value) ||
          costomer.email.match(value)
        );
      });
    }
  },
  //定义一个方法在每次更新，添加，删除之后给用户一个提示
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    //阻止事件的冒泡
    this.fetchCustomers();
  },
  updated() {
    //阻止事件的冒泡
    this.fetchCustomers();
  },
  components: {
    Alert
  }
};
</script>
<style scoped>
</style>