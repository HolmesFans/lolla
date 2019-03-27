<!--  -->
<template>
  <div class="addblog container">
    <el-container class="elContainer">
      <el-header class="elHeader">我的博客</el-header>
      <el-main class="elMain">
        <el-form  v-if="!submmited">
          <label class="labelT">博客主题:</label>
            <el-input v-model="blog.input" placeholder="请输入标题"></el-input>
          <label class="labelT">博客内容:</label>
          <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
          <el-form-item>
            <el-input type="textarea"  :autosize="{ minRows: 10, maxRows: 4}" class="textareaIpt" v-model="blog.content"></el-input>
          </el-form-item>
          <div>
            <p class="titleP">标题标签:</p>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="vue.js" value="a"  v-model="checkList"></el-checkbox>
              <el-checkbox label="node.js" value="b" v-model="checkList"></el-checkbox>
              <el-checkbox label="react.js" value="c" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular4" value="d" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular5" value="e" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular6" value="f" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular7" value="e" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular8" value="h" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular9" value="h1" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular11" value="h2" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular10" value="h3" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular14" value="h4" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular12" value="h5" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular13" value="h6" v-model="checkList"></el-checkbox>
              <el-checkbox label="Angular15" value="h7" v-model="checkList"></el-checkbox> -
            </el-checkbox-group>
          </div>
          <el-select v-model="value10" default-first-option placeholder="请选择博客作者">作者
            <el-option v-for="item in options5" :key="item.value" :value="item.value"></el-option>
          </el-select>
        <el-button type="primary" style="width:100%; margin-top:30px;" v-on:click.prevent="post">提交确认</el-button>
        </el-form>
      </el-main>
      <div v-if="submmited">
          <h3>你的博客更新成功</h3>
      </div>
      <el-main class="elMainOne">
        <h3>博客总览</h3>
        <p class="TitleP">博客标题:{{blog.input}}</p>
        <p class="CententP">博客内容:</p>
        <p style="text-align:left">{{blog.content}}</p>
        <p class="classificationP">博客分类:</p>
        <ul class="classificationUl">
          <li v-for="checkListS in checkList">{{checkListS}}</li>
        </ul>
        <p class="authorP">作者:</p>
        <p>{{value10}}</p>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        input: "",
        content: ""
      },
      checkList: [],
      options5: [
        {
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],
      value10: [],
      submmited:false,
    };
  },
  components: {},
  computed: {},
  methods: {
    post:function(){
      this.$http.post("http://jsonplaceholder.typicode.com/posts",{
          title:this.blog.input,
          body:this.blog.content,
          userId:1
      })
      .then(function(data){
        // console.log(data)
        this.submmited = true
      })
    }
  }
};
</script>
<style >
.elHeader {
  color: #333;
  line-height: 60px;
  font-size: 28px;
}
.elMainOne {
  color: #333;
  height: 100%;
}
.elMain {
  color: #333;
  height: 100%;
}
.labelT{
  margin: 10px;
  font-size: 20px;
}
.titleP{
  font-size: 20px ;
  font-weight: 700;
  margin: 10px 0;
}
.el-input__inner{
  margin: 10px 0;
}
.el-form-item{
  margin: 10px 0;
}
.el-checkbox-group{
  width: 60% !important;
  margin: 10px auto !important;
}
.el-checkbox{
  width:20%;
  text-align: left;
}
.el-input__inner,.el-select{
  width: 100% !important;
}
.classificationUl{
  list-style: none;
}
</style>