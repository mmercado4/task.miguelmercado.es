<template>
  <div class="task">
    <p>{{ task.name }}</p>
    <p>{{ task.description }}</p>
    <input
      type="checkbox"
      name=""
      v-bind:checked="task.done"
      @change="handleCheck"
    />
    <p v-if="task.done">TRUE</p>
    <p v-else>FALSE</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskVue",
  props: {
    task: Object,
    doTask: Function,
    id: String,
  },
  methods: {
    handleCheck(e) {
      this.doTask(this.id, this.task.name, e.target.checked);
    },
  },
};
</script>

<style scoped>
div.task {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
