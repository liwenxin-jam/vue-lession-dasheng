<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
  export default {
    provide() {
      // 把表单实例作为参数传递下去，子代可以直接使用
      return {
        form: this,
      };
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
    },
    methods: {
      validate(cb) {
        // 调用所有含有prop属性的子组件的validate方法并得到Promise数组
        const tasks = this.$children
          .filter(item => item.prop)
          .map(item => item.validate());
        // 所有任务必须全部成功才算校验通过，任一失败则校验失败
        Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false));
      }
    }
  };
</script>

<style scoped>
</style>