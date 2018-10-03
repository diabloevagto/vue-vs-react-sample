<template>
  <div>
    <h1>todo list</h1>
    <TodoInput v-on:addNewTodo="addNewTodo" />
    <TodoDisplay :todos="todos" />
  </div>
</template>

<script>
import TodoInput from "./TodoInput";
import TodoDisplay from "./TodoDisplay";

export default {
  components: { TodoInput, TodoDisplay },
  data: function() {
    return { todos: [] };
  },
  methods: {
    addNewTodo(val) {
      this.todos.push(val);
    }
  }
};
</script>

<style scoped>
</style>
