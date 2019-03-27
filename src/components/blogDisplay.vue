<!--  -->

<template>
  <div id="blogDisplay">
      <p>{{blog.title}}</p>
      <p>{{blog.body}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
        id:this.$route.params.id,
        blog:{}
    };
  },

    created(){
            this.$http.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
            .then(function(data){
                this.blog = data.body
            })
    },
  components: {},

  computed: {},

  methods: {}
}

</script>
<style  scoped>
#blogDisplay{
    max-width: 1200px;
    margin: 0 auto;
}

</style>