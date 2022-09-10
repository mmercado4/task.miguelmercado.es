<template>
  <div class="task-container">
    <p>Tareas</p>
  </div>
</template>

<script>
export default {
  name: "TaskContainerVue",
  props: { listId: String },
  data() {
    return {
      task: [],
    };
  },
  created() {
    console.log("buscamos tareas", this.listId);
  },
};
</script>

<style scoped>
div.task-container {
  max-height: 85%;
  width: 100%;
  background-color: aquamarine;
}
p {
  color: tomato;
}
</style>
