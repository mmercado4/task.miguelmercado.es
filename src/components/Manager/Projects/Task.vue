<template>
  <div class="task">
    <p>{{ task.name }}</p>
    <p>{{ task.description }}</p>
    <input
      type="checkbox"
      v-bind:id="task.id"
      v-bind:checked="task.done"
      @change="handleCheck"
    />
    <p v-if="task.done">TRUE</p>
    <p v-else>FALSE</p>
    <p>tarea {{ task.id }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskVue",
  props: {
    task: Object,
  },
  methods: {
    handleCheck(e) {
      let { id, checked } = e.target;
      this.$emit("do-task", {
        id: id,
        checked: checked,
      });
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
