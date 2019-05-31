<template>
  <div id="app">
    <!-- <router-view /> -->
    <child />
    <div style="color:red">
      {{msg}}
    </div>
    <button @click='boardcast'>广播事件</button>
  </div>
</template>

<script>
  import Child from './kcomponent/Child';

  export default {
    name: 'app',
    provide: {
      title: '我是骚气无比的XXX'
    },
    components: {
      Child
    },
    data() {
      return {
        msg: ''
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
      }
    }
  }
</script>

<style>

</style>