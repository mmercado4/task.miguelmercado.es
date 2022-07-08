<template>
  <div class="list">
    <p>{{ list.name }}</p>
    <TaskVue
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @do-task="doTask"
    />
  </div>
</template>

<script>
import TaskVue from "./Task.vue";

export default {
  name: "ListVue",
  props: {
    list: Object,
  },
  components: { TaskVue },
  data() {
    return {
      tasks: [
        {
          id: 3331,
          name: "Crear estructura",
          done: false,
          description: "Crear proyecto en gitlab y subir a producción",
        },
        {
          id: 3332,
          name: "Añadir campos y secciones",
          done: true,
          description: "Añadir los campos de datos personales",
        },
      ],
    };
  },
  methods: {
    doTask({ id, checked }) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === parseInt(id)) {
          task.done = checked;
        }
        return task;
      });
    },
  },
};

//buscar tareas en base de datos según se inicie
</script>

<style scoped>
div.list {
  background-color: white;
}
</style>
