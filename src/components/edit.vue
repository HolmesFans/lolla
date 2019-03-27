<!--  -->
import func from './vue-temp/vue-editor-bridge';
<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">修改用户</h1>
    <form action v-on:submit="updateCustomer" class="form-horizontal">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label for>电话</label>
          <input type="text" id="CusForm" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label  for="inputEmail3">邮箱</label>
          <input type="email" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label for>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          >
        </div>
        <div class="form-group">
          <label for>毕业学校</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="customer.graduationschool"
          >
        </div>
        <div class="form-group">
          <label for>职业</label>
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
        <button type="submit" class="btn btn-primary">修改完成</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./alert"
export default {
  data() {
    return {
      customer: {},
      alert :""
    };
  },

  components: {},

  computed: {},

  methods: {
    fetchCustomer(id){
        this.$http.get("http://localhost:3000/users/" + id)
        .then(function(response){
          this.customer = response.body
        })
    },
    updateCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          this.alert="请添加有效的信息!";
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          profile: this.customer.profile
        };
        this.$http
          .put("http://localhost:3000/users/"+ this.$route.params.id, updateCustomer)
          .then(function(response) {
            // console.log(response)
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功!" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created(){
    this.fetchCustomer(this.$route.params.id)
  },
  components:{
    Alert
  }
};
</script>
<style scoped>
</style>