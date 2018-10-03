<template>
  <div>
    <h1>all todos</h1>
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
h1 {
  color: green;
}
p {
  color: red;
}
</style>
