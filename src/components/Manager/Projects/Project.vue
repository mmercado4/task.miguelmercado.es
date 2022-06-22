<template>
  <div class="project">
    <p>{{ project.name }}</p>
    <TaskVue
      v-for="(task, index) in project.tasks"
      :key="index"
      v-bind:task="task"
      v-bind:id="project.id"
      v-bind:doTask="doTask"
    />
  </div>
</template>

<script>
import TaskVue from "./Task.vue";

export default {
  name: "ProjectVue",
  props: {
    project: Object,
    doTask: Function,
  },
  components: { TaskVue },
};
</script>

<style scoped>
div.project {
  background-color: greenyellow;
}
</style>
