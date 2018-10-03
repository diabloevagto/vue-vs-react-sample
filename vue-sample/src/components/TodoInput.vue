<template>
  <div>
    <input v-model="context">
    <button @click="onClick">新增</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return { context: "" };
  },
  methods: {
    onClick() {
      this.$emit("addNewTodo", this.context);
      this.context = "";
    }
  }
};
</script>

<style scoped>
</style>
