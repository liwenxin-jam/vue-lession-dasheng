<template>
  <div>
    <h2>Child</h2>
    <div>
      <grand-child />
    </div>
  </div>
</template>

<script>
  import GrandChild from './GrandChild';

  export default {
    components: { GrandChild }
  }
</script>

<style>

</style>