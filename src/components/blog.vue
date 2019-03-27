<!--  -->
import func from './vue-temp/vue-editor-bridge';
<template>
  <div id="blog">
    <h1>博客总览</h1>
    <el-input placeholder="搜索框" v-model="ipt" clearable></el-input>
    <div v-for="blog in fill" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-col>{{blog.title}}</h2>
      </router-link>
      <p v-coll>{{blog.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      blogs: [],
      ipt: ""
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        // console.log(data)
        this.blogs = data.body.slice(0, 20);
        // console.log(this.blogs)
      });
  },
  computed: {
    fill: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.ipt);
      });
    }
  },
  components: {},

  methods: {}
};
</script>
<style scoped>
#blog {
  max-width: 1000px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 10px;
  border: 1px solid #000;
  background: #ccc;
  box-sizing: border-box;
}
</style>