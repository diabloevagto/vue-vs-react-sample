<template>
  <div>
    <h1>todo list</h1>
    <TodoInput v-on:addNewTodo="addNewTodo" />
    <p
      v-for="todo in todos"
      :key="todo"
    >{{todo}}</p>
  </div>
</template>

<script>
import TodoInput from "./TodoInput";

export default {
  components: { TodoInput },
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
