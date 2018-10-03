<template>
  <div>
    <p
      v-for="(todo, idx) in todos"
      :key="idx"
    >{{todo}}</p>
  </div>
</template>

<script>
export default {
  props: ["todos"]
};
</script>

<style scoped>
</style>
