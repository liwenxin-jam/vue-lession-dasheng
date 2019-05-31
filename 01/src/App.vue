<template>
  <div id="app">
    <!-- <router-view /> -->

    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <!-- <Demo> -->
          <k-input v-model="model.username"></k-input>
        <!-- </Demo> -->
      </k-form-item>
      <k-form-item label="确认密码" prop="password">
        <k-input type="password" v-model="model.password"></k-input>
      </k-form-item>
      <k-form-item>
        <el-button @click="submitForm('loginForm')">提交</el-button>
      </k-form-item>
    </k-form>

    <!-- <h2>{{name}}</h2>
    <k-input v-model="name"></k-input>
    <input type="text" v-model="name" /> -->

    <!-- <element-form /> -->

    <!-- <child />
    <div style="color:red">
      {{msg}}
    </div>
    <button @click='boardcast'>广播事件</button> -->
  </div>
</template>

<script>
  import Child from './kcomponent/Child';
  import ElementForm from './components/ElementForm';
  import KInput from './kcomponent/KInput';
  import KFormItem from './kcomponent/KFormItem';
  import KForm from './kcomponent/KForm';

  export default {
    name: 'app',
    provide: {
      title: '我是骚气无比的XXX'
    },
    components: {
      Child,
      ElementForm,
      KInput,
      KFormItem,
      KForm
    },
    data() {
      return {
        name: 'hello world',
        msg: '',
        model: { username: "", password: "" },
        rules: {
          username: [
            { required: true, message: "请输入用户名" },
            { type: 'email', message: '邮箱格式不正确' }
          ],
          password: [{ required: true, message: "请输入密码" }],
        }
      }
    },
    mounted() {
      this.$on('dispatch', msg => {
        this.msg = msg;
      })
    },
    methods: {
      boardcast() {
        this.$boardcast('boardcast', '来自App的广播消息');
      },
      submitForm(form) {
        this.$refs[form].validate(valid => {
          if (valid) {
            alert('请求登录!')
          } else {
            alert('校验失败！')
          }
        })
      }
    }
  }
</script>

<style>

</style>