<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Todolist />
  </div>
</template>

<script>
import Todolist from "./components/Todolist";

export default {
  name: "app",
  components: { Todolist }
};
</script>

<style>
</style>
