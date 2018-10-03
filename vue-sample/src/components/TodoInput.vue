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
      const { context } = this;

      console.log(context);
    }
  }
};
</script>

<style scoped>
</style>
