<template>
  <div>
    <input :type="type" :value="value" @blur="onBlur" @input="onInput">
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onBlur(e) {
        this.$dispatch('validate');
      },
      onInput(e) {
        // 派发事件，通知父组件输入值变化
        this.$emit('input', e.target.value);
        // 通知父组件校验
        this.$dispatch('validate');
      }
    },
  }
</script>