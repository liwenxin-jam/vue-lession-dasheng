<template>
  <ul>
    <li class="tree-li">
      <span @click="toggle">{{ data.title }}</span>
      <Node v-if="showSub" v-for="(item, index) in data.children" :key="index" :data="item"></Node>
    </li>
  </ul>
</template>

<script>
  export default {
    // 递归需要定义自身的name
    name: "Node",
    props: ["data"],
    methods: {
      toggle() {
        this.showSub = !this.showSub;
      }
    },
    data() {
      return {
        showSub: true
      };
    }
  }
</script>